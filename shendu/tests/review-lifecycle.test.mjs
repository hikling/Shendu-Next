import test from 'node:test';
import assert from 'node:assert/strict';
import { REQUIRED_ANSWERS, validRecordType, validIsoDate, validRecordPeriod, missingCompletionFields } from '../domain/review-lifecycle.mjs';

test('六类复盘完成条件保留各自必填项与行动约定', () => {
  for (const type of Object.keys(REQUIRED_ANSWERS)) {
    const data = {
      answers: Object.fromEntries(REQUIRED_ANSWERS[type].map(key => [key, ['事实']])),
      action: '明天执行一项具体行动',
      ifCondition: '如果遇到阻碍',
      ifThen: '那么先完成十分钟',
      verifyDate: '2026-10-14'
    };
    const record = { type, title: type === 'decision' ? '决定是否调整计划' : '', data };
    assert.deepEqual(missingCompletionFields(record, '2026-10-13'), [], type);
    for (const key of REQUIRED_ANSWERS[type]) {
      const incomplete = { ...record, data: { ...data, answers: { ...data.answers, [key]: ['  '] } } };
      assert.ok(missingCompletionFields(incomplete, '2026-10-13').includes(key), `${type}.${key}`);
    }
    assert.ok(missingCompletionFields({ ...record, data: { ...data, verifyDate: '2026-10-12' } }, '2026-10-13').includes('verifyDate'));
    assert.ok(missingCompletionFields({ ...record, data: { ...data, ifThen: '' } }, '2026-10-13').includes('ifThen'));
  }
  assert.ok(missingCompletionFields({ type: 'decision', title: '', data: { answers: {}, action: '', ifThen: '', verifyDate: '' } }, '2026-10-13').includes('title'));
  assert.ok(missingCompletionFields({ type: 'daily', data: { answers: { today: ['事'] }, action: '做', ifThen: '做', verifyDate: '2026-10-13' } }, '2026-10-13').includes('ifCondition'));
});

test('类型与周期校验拒绝不存在的日和格式错误的周', () => {
  assert.equal(validRecordType('quarterly'), true);
  assert.equal(validRecordType('other'), false);
  assert.equal(validIsoDate('2026-02-29'), false);
  assert.equal(validIsoDate('2024-02-29'), true);
  assert.equal(validRecordPeriod('weekly', '2026-W53'), true);
  assert.equal(validRecordPeriod('weekly', '2026-W00'), false);
  assert.equal(validRecordPeriod('monthly', '2026-13'), false);
  assert.equal(validRecordPeriod('quarterly', '2026-10-13'), true);
});

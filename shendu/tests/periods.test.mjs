import test from 'node:test';
import assert from 'node:assert/strict';
import { todayDate, currentPeriodFor, shiftCalendarDate, beijingFileStamp } from '../domain/periods.mjs';
import { today, defaultPeriod, shiftIsoDate } from '../public/core/dates.js';

test('服务端和界面在不同时区客户端使用同一北京时间周期', () => {
  const beforeMidnight = new Date('2026-12-31T15:59:59Z');
  const afterMidnight = new Date('2026-12-31T16:00:00Z');
  for (const instant of [beforeMidnight, afterMidnight]) {
    assert.equal(todayDate(instant), today(instant));
    for (const type of ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'decision']) {
      assert.equal(currentPeriodFor(type, instant), defaultPeriod(type, instant), type);
    }
  }
  assert.equal(todayDate(beforeMidnight), '2026-12-31');
  assert.equal(todayDate(afterMidnight), '2027-01-01');
  assert.equal(currentPeriodFor('quarterly', afterMidnight), '2027-01-01');
  assert.equal(currentPeriodFor('decision', afterMidnight), '2027-01-01');
  assert.equal(currentPeriodFor('weekly', afterMidnight), '2026-W53');
  assert.equal(currentPeriodFor('yearly', afterMidnight), '2027');
});

test('自然日移动和备份时间戳按北京时间处理', () => {
  assert.equal(shiftCalendarDate('2024-02-28', 1), '2024-02-29');
  assert.equal(shiftCalendarDate('2026-12-31', 1), '2027-01-01');
  assert.equal(shiftCalendarDate('2026-01-01', -1), '2025-12-31');
  assert.equal(shiftCalendarDate('2026-12-31', 1), shiftIsoDate('2026-12-31', 1));
  assert.equal(beijingFileStamp(new Date('2026-10-13T16:05:09Z')), '20261014-000509');
});

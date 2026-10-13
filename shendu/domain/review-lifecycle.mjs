import { todayDate } from './periods.mjs';

export const REVIEW_TYPES = ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'decision'];
export const REQUIRED_ANSWERS = {
  daily: ['today'],
  weekly: ['plan', 'progress', 'nextThree'],
  monthly: ['goalResult', 'change', 'bottleneck', 'experiment'],
  quarterly: ['hope', 'evidence', 'choices', 'nextGoals'],
  yearly: ['coordinates', 'expectations', 'keepRelease', 'nextYear'],
  decision: ['decision', 'options', 'facts', 'expectation', 'failure', 'choice', 'firstStep']
};

export const validRecordType = type => REVIEW_TYPES.includes(type);
export const validIsoDate = value => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.valueOf()) && date.toISOString().slice(0, 10) === value;
};
export const validRecordPeriod = (type, value) => {
  const period = String(value || '');
  if (type === 'weekly') return /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/.test(period);
  if (type === 'monthly') return /^\d{4}-(?:0[1-9]|1[0-2])$/.test(period);
  if (type === 'yearly') return /^\d{4}$/.test(period);
  return validIsoDate(period);
};

export function missingCompletionFields(record, currentDay = todayDate()) {
  const { type, title = '', data = {} } = record;
  const missing = [];
  for (const key of REQUIRED_ANSWERS[type] || []) {
    if (!(data.answers?.[key] || []).some(value => String(value).trim())) missing.push(key);
  }
  if (!String(data.action || '').trim()) missing.push('action');
  if (type === 'daily' && !String(data.ifCondition || '').trim()) missing.push('ifCondition');
  if (!String(data.ifThen || '').trim()) missing.push('ifThen');
  if (!validIsoDate(data.verifyDate) || data.verifyDate < currentDay) missing.push('verifyDate');
  if (type === 'decision' && !String(title).trim()) missing.push('title');
  return missing;
}

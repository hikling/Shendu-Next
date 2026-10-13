export const BEIJING_TIME_ZONE = 'Asia/Shanghai';

export function beijingDateParts(value = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: BEIJING_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(value);
  const result = Object.fromEntries(parts.filter(x => x.type !== 'literal').map(x => [x.type, x.value]));
  return { year: Number(result.year), month: Number(result.month), day: Number(result.day), iso: `${result.year}-${result.month}-${result.day}` };
}

export const today = (value = new Date()) => beijingDateParts(value).iso;
export function isoDate(value) {
  const [year, month, day] = String(value).split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}
export function shiftIsoDate(value, days) {
  const date = isoDate(value);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
export function weekValue(value = today()) {
  const date = isoDate(value), weekday = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return `${date.getUTCFullYear()}-W${String(Math.ceil((((date - yearStart) / 86400000) + 1) / 7)).padStart(2, '0')}`;
}
export function defaultPeriod(type, value = new Date()) {
  const current = today(value);
  if (type === 'weekly') return weekValue(current);
  if (type === 'monthly') return current.slice(0, 7);
  if (type === 'yearly') return current.slice(0, 4);
  return current;
}
export function shiftMonth(value, amount, reference = new Date()) {
  const match = /^(\d{4})-(\d{2})$/.exec(String(value)), current = beijingDateParts(reference);
  const base = match ? new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1, 12)) : new Date(Date.UTC(current.year, current.month - 1, 1, 12));
  base.setUTCMonth(base.getUTCMonth() + Number(amount || 0));
  return `${base.getUTCFullYear()}-${String(base.getUTCMonth() + 1).padStart(2, '0')}`;
}
export function formatDate(value) {
  if (!value) return '';
  if (/^\d{4}-W\d{2}$/.test(value)) return `${value.slice(0, 4)} 年第 ${Number(value.slice(6))} 周`;
  if (/^\d{4}$/.test(value)) return `${value} 年`;
  const match = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(value);
  if (!match) return String(value);
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3] || 1), 12));
  return new Intl.DateTimeFormat('zh-CN', { timeZone: BEIJING_TIME_ZONE, year: 'numeric', month: 'long', day: match[3] ? 'numeric' : undefined, weekday: match[3] ? 'short' : undefined }).format(date);
}
export function beijingTime(value) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? '' : new Intl.DateTimeFormat('zh-CN', { timeZone: BEIJING_TIME_ZONE, hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
}
export function beijingDateTime(value) {
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? '' : new Intl.DateTimeFormat('zh-CN', { timeZone: BEIJING_TIME_ZONE, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
}

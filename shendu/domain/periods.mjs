export const BEIJING_TIME_ZONE = 'Asia/Shanghai';

export const beijingParts = (value = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: BEIJING_TIME_ZONE,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }).formatToParts(value);
  return Object.fromEntries(parts.filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
};

export const todayDate = (value = new Date()) => {
  const p = beijingParts(value);
  return `${p.year}-${p.month}-${p.day}`;
};

export const isoWeekValue = value => {
  const [year, month, day] = String(value).split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  const weekday = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1, 12));
  const week = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
};

export const currentPeriodFor = (type, value = new Date()) => {
  const current = todayDate(value);
  if (type === 'weekly') return isoWeekValue(current);
  if (type === 'monthly') return current.slice(0, 7);
  if (type === 'yearly') return current.slice(0, 4);
  return current;
};

export const currentPeriodMessage = type => ({
  daily: '只能填写今天的每日复盘', weekly: '只能填写本周的每周复盘', monthly: '只能填写本月的每月复盘',
  quarterly: '只能填写今天的 90 天复盘', yearly: '只能填写本年的年度复盘', decision: '只能填写今天的重大决策'
}[type] || '只能填写当前周期的复盘');

export const shiftCalendarDate = (value, days) => {
  const [year, month, day] = String(value).split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days, 12));
  return date.toISOString().slice(0, 10);
};

export const beijingFileStamp = (value = new Date()) => {
  const p = beijingParts(value);
  return `${p.year}${p.month}${p.day}-${p.hour}${p.minute}${p.second}`;
};

import { SECOND_IN_MILLIS, MINUTE_IN_SECONDS, HOUR_IN_MINUTES, DAY_IN_HOURS } from './constants';

export const date = new Date();
const oneDay = SECOND_IN_MILLIS * MINUTE_IN_SECONDS * HOUR_IN_MINUTES * DAY_IN_HOURS;
export const todayTimestamp =
  date.getTime() - (date.getTime() % oneDay) + date.getTimezoneOffset() * SECOND_IN_MILLIS * MINUTE_IN_SECONDS;

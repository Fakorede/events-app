import {DateTime} from 'luxon';

export const useDateFormatter = (date, format) => {
  return DateTime.fromISO(date).toFormat(format)
}
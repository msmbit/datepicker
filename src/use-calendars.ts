import { DPState } from './types';
import { createCalendars } from './utils/create-calendars';
import { createWeekdays } from './utils/create-weekdays';

export const useCalendars = ({
  selectedDates,
  state: { offsetDate, rangeEnd, config },
}: DPState) => {
  const calendars = createCalendars(
    offsetDate,
    selectedDates,
    rangeEnd,
    config,
  );

  return {
    calendars,
    weekDays: createWeekdays(calendars[0], config),
  };
};
import { DateTime } from 'luxon';

export function getCalendarDates(pageDate: DateTime, selectedDate: DateTime) {
  const today = DateTime.now();
  const firstDateOfMonth = pageDate.startOf('month');

  const calendarDates = [];

  // day of the week minus one
  const daysToIncludeFromPreviousMonth = firstDateOfMonth.weekday - 1;

  for (let index = 0; index < 42; index++) {
    const date = firstDateOfMonth.plus({ days: index - daysToIncludeFromPreviousMonth });
    calendarDates.push({
      date,
      isToday: today.hasSame(date, 'day'),
      inCurrentMonth: pageDate.hasSame(date, 'month'),
      isSelected: selectedDate.hasSame(date, 'day')
    });
  }

  return calendarDates;
}

import { DateTime } from 'luxon';

export function getCalendarDates(pageDate: DateTime, selectedDate: DateTime) {
  const now = DateTime.now();
  const { month, year } = pageDate;
  const firstDateOfMonth = createDateFromFormat(1, month, year);

  const calendarDates = [];

  const daysToIncludeFromPreviousMonth = firstDateOfMonth.weekday - 1; // day of the week as number with the date (one day) excluded

  for (let index = daysToIncludeFromPreviousMonth; index >= 1; index--) {
    const date = firstDateOfMonth.minus({ days: index });
    calendarDates.push({
      date,
      isToday: now.hasSame(date, 'day'),
      inCurrentMonth: false,
      isSelected: selectedDate.hasSame(date, 'day'),
    });
  }

  for (let index = 1; index <= firstDateOfMonth.daysInMonth; index++) {
    const date = createDateFromFormat(index, month, year);
    calendarDates.push({
      date,
      isToday: now.hasSame(date, 'day'),
      inCurrentMonth: true,
      isSelected: selectedDate.hasSame(date, 'day'),
    });
  }

  const remainingCalendarDays = 42 - calendarDates.length; // Calendar holds a 7x6 grid of dates = 42 dates
  for (let index = 1; index <= remainingCalendarDays; index++) {
    const date = createDateFromFormat(
      firstDateOfMonth.daysInMonth,
      month,
      year
    ).plus({ days: index });
    calendarDates.push({
      date,
      isToday: now.hasSame(date, 'day'),
      inCurrentMonth: false,
      isSelected: selectedDate.hasSame(date, 'day'),
    });
  }

  return calendarDates;
}

function createDateFromFormat(
  day: number,
  month: number,
  year: number
): DateTime {
  const dayPadded = day < 10 ? `0${day}` : day.toString();
  const monthPadded = month < 10 ? `0${month}` : month.toString();
  return DateTime.fromFormat(`${dayPadded}-${monthPadded}-${year}`, 'dd-MM-yy');
}

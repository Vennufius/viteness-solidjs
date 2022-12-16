import { DateTime, Info } from 'luxon';
import { createMemo, createSignal, For, Show } from 'solid-js';
import { getCalendarDates } from '../util/getCalendarDates';
import { FaSolidChevronLeft, FaSolidChevronRight } from 'solid-icons/fa';
function Calendar() {
  const now = DateTime.now();
  const [selectedDate, setSelectedDate] = createSignal(now);
  const [pageDate, setPageDate] = createSignal(now);
  const [workouts, setWorkouts] = createSignal([
    {
      title: 'Do pushups',
      date: DateTime.now().plus({ days: 3 }),
    },
  ]);
  const calendarDates = createMemo(() =>
    getCalendarDates(pageDate(), selectedDate())
  );

  const hasDates = (date: DateTime) => {
    return workouts().some((w) => w.date.hasSame(date, 'day'));
  };

  return (
    <div class='flex divide-x-2 gap-5 items-center'>
      <div class='w-96 h-96 bg-white flex flex-col p-5'>
        <div class='flex justify-between pb-5'>
          <h1>
            {pageDate().monthLong}, {pageDate().year}
          </h1>
          <div class='flex items-center gap-5'>
            <FaSolidChevronLeft
              class='cursor-pointer'
              onClick={() => setPageDate(pageDate().minus({ months: 1 }))}
            />
            <h1
              class='cursor-pointer'
              onClick={() => setPageDate(DateTime.now())}
            >
              Today
            </h1>
            <FaSolidChevronRight
              class='cursor-pointer'
              onClick={() => setPageDate(pageDate().plus({ months: 1 }))}
            />
          </div>
        </div>
        <div class='w-full h-auto grid grid-cols-7 flex-1'>
          <For each={Info.weekdays('short')}>
            {(weekday) => (
              <div class='grid place-content-center text-sm text-gray-600'>
                <h1 class=''>{weekday}</h1>
              </div>
            )}
          </For>
          <For each={calendarDates()}>
            {(item) => (
              <div class='grid place-content-center border-t text-sm relative'>
                <div
                  class={`${item.isToday && 'border-2 border-gray-900'}  ${
                    !item.inCurrentMonth && 'text-gray-500'
                  } ${
                    item.isSelected && 'bg-gray-600 text-white font-bold'
                  } hover:bg-red-400 hover:text-white hover:font-bold w-7 h-7 grid place-items-center rounded-full cursor-pointer duration-150`}
                  onClick={() => setSelectedDate(item.date)}
                >
                  {item.date.day}
                </div>
                <Show when={hasDates(item.date)}>
                  <span class='absolute bottom-0.5 w-1 h-1 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2'></span>
                </Show>
              </div>
            )}
          </For>
        </div>
      </div>
      <div class='h-96 w-96 px-5'>
        <h1 class='text-gray-900 text-lg font-semibold'>
          Schedule for{' '}
          {selectedDate().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
        </h1>
        <div class='text-gray-800'>
          <For
            each={workouts().filter((w) =>
              w.date.hasSame(selectedDate(), 'day')
            )}
            fallback={<p>Nothing planned for today.</p>}
          >
            {(workout) => <p>- {workout.title}</p>}
          </For>
        </div>
      </div>
    </div>
  );
}
export default Calendar;

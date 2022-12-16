import { A, useMatch } from '@solidjs/router';
import { JSX, Show } from 'solid-js';

const SideBarItem = ({
  icon,
  title,
  open,
  href,
}: {
  icon: JSX.Element;
  title: string;
  open: () => boolean;
  href: string;
}) => {
  const match = useMatch(() => href);
  return (
    <A href={href}>
      <div class={`sidebar-item ${match() && 'bg-gray-700'}`}>
        <Show when={match()}>
          <div class='absolute left-0 h-full bg-red-500 w-1 rounded-r-lg'></div>
        </Show>
        <div class='text-gray-900'>{icon}</div>
        <div class={`text-sm duration-200 ${open() ? 'pl-4 ' : 'scale-0 w-0'}`}>
          {title}
        </div>
      </div>
    </A>
  );
};

export default SideBarItem;

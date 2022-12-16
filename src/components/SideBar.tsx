import {
  FaRegularCalendar,
  FaSolidBook,
  FaSolidChartLine,
  FaSolidVial,
  FaSolidLock,
  FaSolidCaretLeft,
} from 'solid-icons/fa';
import { IoFitnessOutline } from 'solid-icons/io';
import { createSignal, Show } from 'solid-js';
import SideBarItem from './SideBarItem';

function SideBar() {
  const [open, setOpen] = createSignal(true);

  return (
    <div
      class={`fixed top-0 left-0 ${
        open() ? 'min-w-fit' : 'w-14'
      } h-screen bg-gray-600 shadow-lg text-gray-200 duration-200 relative`}
    >
      <span class='absolute cursor-pointer rounded-full -right-2 top-16 w-5 h-5 border-2 border-gray-600 bg-white text-gray-900 text-center'>
        <FaSolidCaretLeft
          class={`duration-300 ${!open() && 'rotate-180'}`}
          size={16}
          onClick={() => setOpen(!open())}
        />
      </span>
      <div class='flex flex-col items-center py-6 text-red-500'>
        <IoFitnessOutline size={open() ? 50 : 30} class='duration-500' />
        <b class={`uppercase duration-200 ${!open() && 'scale-0'}`}>Viteness</b>
      </div>
      <SideBarItem
        open={open}
        icon={<FaRegularCalendar size={24} />}
        title='Calendar'
        href='/calendar'
      />
      <SideBarItem
        open={open}
        icon={<FaSolidBook size={24} />}
        title='Library'
        href='/library'
      />
      <SideBarItem
        open={open}
        icon={<FaSolidChartLine size={24} />}
        title='Statistics'
        href='/statistics'
      />
      <SideBarItem
        open={open}
        icon={<FaSolidVial size={24} />}
        title='Test'
        href='/test'
      />
      <SideBarItem
        open={open}
        icon={<FaSolidLock size={24} />}
        title='Admin'
        href='/admin'
      />
    </div>
  );
}
export default SideBar;

{
  /* 
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import router from "@/router";
import { useUserDataStore } from "@/stores/userData";

const authStore = useAuthStore();
const userDataStore = useUserDataStore();

const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped lang="scss">
.icon {
  opacity: 1 !important;
}
.list-item {
  cursor: pointer;
}
</style> */
}

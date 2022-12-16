import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import HomePage from './pages/Home';
import CalendarPage from './pages/Calendar';
import SideBar from './components/SideBar';
import LibraryPage from './pages/Library';
import StatisticsPage from './pages/Statistics';
import TestPage from './pages/Test';
import AdminPage from './pages/Admin';

const App: Component = () => {
  return (
    <div class='flex'>
      <SideBar />
      <div class='flex-1'>
        <Routes>
          <Route path='/' component={HomePage} />
          <Route path='/calendar' component={CalendarPage} />
          <Route path='/library' component={LibraryPage} />
          <Route path='/statistics' component={StatisticsPage} />
          <Route path='/test' component={TestPage} />
          <Route path='/admin' component={AdminPage} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import { A } from '@solidjs/router';

function HomePage() {
  return (
    <div class='grid mt-24 justify-center'>
      <h1 class='text-2xl text-gray-900 dark:text-white p-10'>Login page</h1>
      <div class='rounded p-10 bg-gray-600 shadow-lg w-96'>
        <label for='username' class='label-light'>
          Username
        </label>
        <input
          id='username'
          type='text'
          class='input-dark'
          placeholder='Usename'
        />
        <div class='p-2'></div>
        <label for='password' class='label-light'>
          Password
        </label>
        <input
          id='password'
          type='password'
          class='input-dark'
          placeholder='*******'
        />
        <div class='p-2'></div>
        <A href='/dash'>
          <button class='btn-dark'>Login</button>
        </A>
      </div>
    </div>
  );
}
export default HomePage;

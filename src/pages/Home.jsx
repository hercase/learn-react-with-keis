import { CheckIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className='py-32 sm:py-48 lg:py-56'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>React con Keis</h1>
        <ul className='mt-6 text-lg leading-8 text-gray-600'>
          <li className='flex items-center justify-center gap-2'>
            <CheckIcon className='h-5 w-5 text-green-500' aria-hidden='true' />
            <span>React 18</span>
          </li>

          <li className='flex items-center justify-center gap-2'>
            <CheckIcon className='h-5 w-5 text-green-500' aria-hidden='true' />
            <span>Tailwind CSS</span>
          </li>

          <li className='flex items-center justify-center gap-2'>
            <CheckIcon className='h-5 w-5 text-green-500' aria-hidden='true' />
            <span>React Router</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

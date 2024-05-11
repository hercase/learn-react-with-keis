import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './components/Logo';

const navigation = [
  { name: 'Pokemon', href: '#' },
  { name: 'Plantas', href: '#' },
  { name: 'Personas', href: '#' }
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='container mx-auto bg-white'>
      <header className=''>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Keis</span>
              <Logo />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Abrir menu principal</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Logo />
              </a>
              <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
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
      </div>
    </div>
  );
};

export default App;

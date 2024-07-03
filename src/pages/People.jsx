const people = [
  {
    name: 'Vera Carpenter',
    date: 'Jan 21, 2020',
    status: 'Activo'
  },
  {
    name: 'Blake Bowman',
    date: 'Jan 02, 2023',
    status: 'Activo'
  },
  {
    name: 'Dana Moore',
    date: 'Jan 10, 2022',
    status: 'Activo'
  }
];

const People = () => {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-md'>
      <ul className='divide-y divide-gray-200'>
        {people.map((item) => (
          <li key={item.name} className='hover:bg-gray-50'>
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-thin text-gray-700 truncate'>{item.name}</p>
                <p className='text-sm font-thin text-gray-700 truncate'>{item.date}</p>
                <div className='ml-2 flex-shrink-0 flex'>
                  <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>{item.status}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;

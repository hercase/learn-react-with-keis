const pokemons = [
  {
    img: 'https://images.unsplash.com/photo-1542779283-429940ce8336?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Pikachu',
    type: 'Electric'
  },
  {
    img: 'https://images.unsplash.com/photo-1542779283-429940ce8336?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Balbasaur',
    type: 'Plant'
  },
  {
    img: 'https://images.unsplash.com/photo-1542779283-429940ce8336?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Charmander',
    type: 'Fire'
  }
];

const Pokemon = () => {
  return (
    <div className='flex pt-6 justify-center flex-col sm:flex-row'>
      {pokemons.map((item) => (
        <div key={item.name} className='sm:w-1/4 p-2'>
          <div className='bg-white px-6 py-8 rounded-lg shadow-lg text-center'>
            <div className='mb-3'>
              <img className='w-auto mx-auto rounded-full' src={item.img} alt='' />
            </div>
            <h2 className='text-base font-medium text-gray-600 pb-4'>{item.name}</h2>
            <a href='#' className='px-4 py-2 bg-indigo-600 text-white rounded-full'>
              {item.type}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;

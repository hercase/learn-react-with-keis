const plants = [
  {
    img: 'https://d22fxaf9t8d39k.cloudfront.net/0f1dda37ef288958bf34f0cabbce5c8dc4dddea37b733853f2ea75921f333dbe3442.jpg',
    name: 'Monstera',
    description:
      'Monstera es un género con cerca de 60 especies​ de plantas con flores perteneciente a la familia Araceae. Es originario de México y América tropical. Son hierbas o enredaderas de hoja perenne. Son comúnmente cultivadas como plantas de interior. La más conocida representante del género, Monstera deliciosa.'
  },
  {
    img: 'https://d22fxaf9t8d39k.cloudfront.net/a6e6505a5eb3a0edeb8c8e5f2d250977b205b634910cfa498c6daef2ac9d78ce3442.jpg',
    name: 'Philodendron Pink Princess',
    description:
      'Philodendron "pink princess" es una planta tropical conocida por sus hermosas hojas variegadas de color rosa y verde. Es originaria de Sudamérica y es conocida por su capacidad para adaptarse a diversas condiciones, lo que la convierte en una adición versátil y fácil de cuidar.'
  },
  {
    img: 'https://d22fxaf9t8d39k.cloudfront.net/784aca5d58c09401d3eadd79c9c01ecf7ba101f6f888596b77f47ff831e16e763442.jpg',
    name: 'Calathea orbifolia',
    description:
      'Calathea orbifolia es una especie fanerógama de la familia Marantaceae, nativa de Bolivia y del este de Brasil. Prospera en condiciones umbrosas, sobre 10 °C. Presenta hojas de verde muy oscuro, y dibujos de nervios marcados, y el envés es de un color morado.'
  }
];

const Plants = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {plants.map((item) => (
        <div key={item.name} className='w-full bg-gray-100 rounded-lg sahdow-lg overflow-hidden flex flex-col items-center'>
          <div className=''>
            <img className='object-center object-cover h-auto w-full' src={item.img} alt='' />
          </div>
          <div className='text-center px-4 py-8 sm:py-6'>
            <p className='text-xl text-gray-700 font-bold mb-2'>{item.name}</p>
            <p className='text-base text-gray-400 font-normal'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plants;

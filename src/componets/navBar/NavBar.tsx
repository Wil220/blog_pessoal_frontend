import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full bg-[#6B4226] text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">


        <button 
          onClick={toggleMenu}
          className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-4 py-2 rounded-md'>
          Menu 
        </button>
        {isOpen && (
          <div className='flex flex-col md:flex-row md:gap-4 absolute top-16 right-4 bg-[#6B4226] py-2 px-4 rounded-md md:relative md:top-0 md:right-0'>
            <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-4 py-2 rounded-md hover:underline'>
              Postagens
            </div>
            <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
              Temas
            </div>
            <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
              Cadastrar tema
            </div>
            <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
              Perfil
            </div>
            <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
              Sair
            </div>
            {/* <div className="no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#d9b382] to-[#000000]"> */}
  {/* Coffee with Ideas */}
{/* </div> */}

          </div>
        )}
      </div>
      <div className="no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#d9b382] to-[#000000]">
  Coffee with Ideas
</div>

    </div>
  );
}

export default Navbar;

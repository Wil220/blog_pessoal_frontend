// import { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='w-full bg-[#6B4226] text-white flex justify-center py-4'>
//       <div className="container flex justify-between items-center text-lg">
//       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16">
//   <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
//   <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
// </svg>
//         <button 
//           onClick={toggleMenu}
//           className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-4 py-2 rounded-md'>
//           Menu
//         </button>
//         {isOpen && (
//           <div className='flex flex-col md:flex-row md:gap-4 absolute top-16 right-4 bg-[#6B4226] py-2 px-4 rounded-md md:relative md:top-0 md:right-0'>
//             <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-4 py-2 rounded-md hover:underline'>
//               Postagens
//             </div>
//             <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
//               Temas
//             </div>
//             <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
//               Cadastrar tema
//             </div>
//             <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
//               Perfil
//             </div>
//             <div className='transition duration-300 ease-in-out hover:bg-[#4E3120] px-2 py-2 rounded-md hover:underline'>
//               Sair
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#d9b382] to-[#000000]">
//   Coffee with Ideas
// </div>

//     </div>
//   );
// }

// export default Navbar;

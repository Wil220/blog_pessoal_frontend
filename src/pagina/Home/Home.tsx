import './Home.css';
import Navbar from '../../componets/navBar/NavBar';


function Home() {
  return (
    <>
    <Navbar />
      <div className="bg-[#6B4226] flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#d9b382] to-[#000000]">Seja bem-vindo!</h2>
            <p className="no-underline md:underline text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#d9b382] to-[#000000]">Expresse aqui seus pensamentos e opiniões</p>

            <div className="flex justify-around gap-4">
              <button className='rounded bg-gradient-to-r from-[#d9b382] to-[#000000]  px-2 py-2 rounded-md hover:underline'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Você pode adicionar uma imagem ou qualquer outro conteúdo aqui */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


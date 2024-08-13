import React from 'react';
import cafe from '../../assets/imagen/cafe com ideia.jpg'; // Certifique-se de que o caminho está correto

function Login() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-[#222831]"
      style={{ background: "url(https://cdn.pixabay.com/photo/2016/12/28/01/44/leaf-notebook-1935230_960_720.jpg) no-repeat center center fixed", backgroundSize: 'cover' }}
    >
 <div className="absolute top-4 left-4 p-4 bg-[#6B4226] bg-opacity-80 rounded-md shadow-md">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
  <h2 className="text-lg font-bold text-white font-borracha">
    Coffee with Ideas
  </h2>
</div>


 
      <div className="absolute left-1/4 w-full max-w-md p-4 bg-white bg-opacity-80 rounded-md shadow-md" style={{ marginLeft: '-5cm' }}>
        <form>
          <div className="mb-8">
            
            <h2 className="text-3xl font-bold text-[#6B4226]">Coffee with Ideas</h2>
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-xs font-semibold mb-2">Email</label>
            <input
              name="email"
              type="text"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Seu email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-xs font-semibold mb-2">Senha</label>
            <input
              name="password"
              type="password"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="Sua senha"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#6B4226] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-800">
                Lembrar de mim
              </label>
            </div>
            <a href="javascript:void(0);" className="text-[#6B4226] text-sm hover:underline">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#6B4226] text-white py-2 px-4 rounded-md hover:bg-[#5a361e]"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>

      {/* Imagem mais para a direita e ajustada para não sobrepor o formulário */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <img
          src={cafe}
          alt="Coffee"
          style={{ width: '400px', height: '400px' }}
          className="object-cover rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
}

export default Login;

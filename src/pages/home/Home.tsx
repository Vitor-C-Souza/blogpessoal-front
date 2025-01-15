function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <button
                className="rounded text-white 
                         border-white border-solid border-2 py-2 px-4 
                          hover:scale-105 hover:text-purple-300 hover:border-violet-400
                          hover:bg-gray-500 hover:bg-opacity-25 transition-all"
              >
                Nova Postagem
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/kjefwstje/VpwApCU.png?updatedAt=1736816971172"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

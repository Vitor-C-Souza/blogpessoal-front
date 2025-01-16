import "./cadastro.css";

function Cadastro() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-4 ">
          <h2 className="text-slate-900 text-5xl bg-white">Cadastrar</h2>
          <div className="w-full relative">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              className="peer"
              required
            />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder=" "
              className="peer"
              required
            />
            <label htmlFor="usuario">Usuário</label>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder=" "
              className="peer"
              required
            />
            <label htmlFor="foto">Foto</label>
          </div>
          <div className="w-full relative">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              className="peer"
              required
            />
            <label htmlFor="senha">Senha</label>
          </div>
          <div className="w-full relative">
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder=" "
              className="peer"
              required
            />
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
          </div>
          <div className="flex justify-around w-full gap-8 bg-white">
            <button className="rounded-full text-white bg-red-400 hover:bg-red-700 w-1/2 py-2">
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-full text-white bg-purple-400 hover:bg-purple-900 w-1/2 py-2 flex justify-center"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Cadastro;

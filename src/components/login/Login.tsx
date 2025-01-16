import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4">
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full relative">
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
          <div className="flex flex-col w-full relative">
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
          <button
            type="submit"
            className="rounded-full bg-purple-400 flex justify-center
                      hover:bg-purple-900 text-white w-1/2 py-2"
          >
            <span>Entrar</span>
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link
              to={"/cadastro"}
              className="hover:underline underline-offset-2"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </section>
    </>
  );
}

export default Login;

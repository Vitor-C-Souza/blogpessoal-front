import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./cadastro.css";
import { RotatingLines } from "react-loader-spinner";
import { cadastrarUsuario } from "../../services/Service";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white">
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-4 "
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-slate-900 text-5xl bg-white">Cadastrar</h2>
          <div className="w-full relative">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              className="peer"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
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
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
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
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
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
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
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
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
              required
            />
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
          </div>
          <div className="flex justify-around w-full gap-8 bg-white">
            <button
              className="rounded-full text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-full text-white bg-purple-400 hover:bg-purple-900 w-1/2 py-2 flex justify-center"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Cadastro;

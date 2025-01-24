import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto m-4 rounded-2xl overflow-hidden border-purple-500 border-solid border-4">
      <img
        className="w-full h-72 object-cover border-b-8 border-purple-500"
        src="https://ik.imagekit.io/kjefwstje/cf44d7919ee7114ea47fd2f83fdc86b4.jpg?updatedAt=1737678162835"
        alt="Capa do Perfil"
      />

      <img
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-purple-500 relative z-10"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div
        className="relative mt-[-6rem] h-72 flex flex-col 
                     text-white text-2xl items-center justify-center"
      >
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;

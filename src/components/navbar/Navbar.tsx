import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }
  return (
    <header
      className="w-full flex justify-center py-4
            			    text-white"
    >
      <div className="container flex justify-between text-lg">
        <Link to={"/home"} className="text-2xl font-bold">
          Blog Pessoal | Vítor
        </Link>
        <ul className="flex gap-9">
          <li>
            <i className="bx bx-book-content" />
            Postagens
          </li>
          <li>
            <a href="temas">
              <i className="bx bx-tag-alt" /> Temas
            </a>
          </li>
          <li>
            <Link to="/cadastro">
              <i className="bx bx-edit-alt" /> Cadastrar
            </Link>
          </li>
          <li>
            <a href="tema">
              <i className="bx bx-purchase-tag-alt" /> Tema
            </a>
          </li>
          <li>
            <a href="perfil">
              <i className="bx bx-body" /> Perfil
            </a>
          </li>
          <li>
            <Link to="" onClick={logout}>
              <i className="bx bx-exit" /> Sair
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

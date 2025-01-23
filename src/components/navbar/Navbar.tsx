import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
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
              <Link to="/postagens">
                <i className="bx bx-book-content" /> Postagens
              </Link>
            </li>
            <li>
              <Link to="/temas">
                <i className="bx bx-tag-alt" /> Temas
              </Link>
            </li>

            <li>
              <Link to="/cadastrartema">
                <i className="bx bx-purchase-tag-alt" /> Cadastrar tema
              </Link>
            </li>
            <li>
              <Link to="/perfil">
                <i className="bx bx-body" /> Perfil
              </Link>
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

  return <>{component}</>;
}

export default Navbar;

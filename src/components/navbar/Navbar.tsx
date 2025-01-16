import { Link } from "react-router-dom";

function Navbar() {
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
            <Link to="/postagens">
              <i className="bx bx-book-content" />
              Postagens
            </Link>
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
            <a href="sair">
              <i className="bx bx-exit" /> Sair
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

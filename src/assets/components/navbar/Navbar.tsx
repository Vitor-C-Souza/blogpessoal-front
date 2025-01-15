function Navbar() {
  return (
    <>
      <header
        className="w-full flex justify-center py-4
            			    text-white"
      >
        <div className="container flex justify-between text-lg">
          <h1 className="text-3xl">Blog Pessoal</h1>
          <ul className="flex gap-9">
            <li>
              <a href="postagens">
                <i className="bx bx-book-content" />
                Postagens
              </a>
            </li>
            <li>
              <a href="temas">
                <i className="bx bx-tag-alt" /> Temas
              </a>
            </li>
            <li>
              <a href="cadastrar">
                <i className="bx bx-edit-alt" /> Cadastrar
              </a>
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
    </>
  );
}

export default Navbar;

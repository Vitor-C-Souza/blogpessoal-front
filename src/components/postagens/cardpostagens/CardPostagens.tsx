import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagens({ postagem }: CardPostagensProps) {
  return (
    <section
      className="border border-white
            flex flex-col rounded-3xl overflow-hidden justify-between text-white"
    >
      <div className="flex flex-row-reverse justify-between">
        <ul className="flex flex-row w-full items-center justify-end gap-5 pr-5">
          <li className=" hover:no-underline hover:scale-150">
            <Link
              to={`/editarpostagem/${postagem.id}`}
              className="text-white flex items-center justify-center py-3 rounded-full"
            >
              <button>
                <i className="bx bx-edit-alt" />
              </button>
            </Link>
          </li>
          <li className="hover:no-underline hover:scale-150">
            <Link
              to={`/deletarpostagem/${postagem.id}`}
              className="text-white w-full flex items-center justify-center py-2 rounded-full"
            >
              <button>
                <i className="bx bx-x" />
              </button>
            </Link>
          </li>
        </ul>

        <header className="flex w-ful py-2 px-4 items-center gap-4">
          <img
            src={postagem.usuario?.foto}
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </header>
      </div>
      <main className="p-4 ">
        <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
        <p>{postagem.texto}</p>
        <p>Tema: {postagem.tema?.descricao}</p>
        <p>
          Data:{" "}
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date(postagem.data))}
        </p>
      </main>
    </section>
  );
}

export default CardPostagens;

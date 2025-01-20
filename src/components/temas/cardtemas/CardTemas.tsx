import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <section className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 text-white font-bold text-2xl">Tema</header>
      <p className="p-8 text-3xl text-white h-full text-justify">
        {tema.descricao}
      </p>

      <ul className="flex flex-row w-full">
        <li className="w-full hover:no-underline">
          <Link
            to={`/editartema/${tema.id}`}
            className="flex items-center justify-center bg-purple-400 hover:bg-purple-900"
          >
            <button className="text-white">Editar</button>
          </Link>
        </li>
        <li className="w-full hover:no-underline">
          <Link
            to={`/deletartema/${tema.id}`}
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
          flex items-center justify-center "
          >
            <button>Deletar</button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default CardTemas;

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <footer className="flex flex-row w-full justify-center text-white ">
        <div className="container flex flex-row-reverse justify-between items-center py-4 pl-60">
          <p className="text-xl font-bold">
            Blog Pessoal Vítor Cavalcante Souza | Copyright: {data}
          </p>
          <div className="flex flex-col gap-1 items-center ">
            <p className="text-lg">Acesse nossas redes sociais</p>
            <ul className="flex gap-2 ">
              <li>
                <a href="#" target="_blank">
                  <LinkedinLogo size={48} weight="bold" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <InstagramLogo size={48} weight="bold" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FacebookLogo className="" size={48} weight="bold" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex flex-row w-full justify-center text-white ">
      <div className="container flex flex-row-reverse justify-between items-center py-4 pl-60">
        <p className="text-xl font-bold">
          Blog Pessoal Vítor Cavalcante Souza | Copyright: {data}
        </p>
        <div className="flex flex-col gap-1 items-center ">
          <p className="text-lg">Acesse nossas redes sociais</p>
          <ul className="flex gap-2 ">
            <li>
              <a href="#" target="_blank">
                <LinkedinLogo size={48} weight="bold" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <InstagramLogo size={48} weight="bold" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FacebookLogo className="" size={48} weight="bold" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

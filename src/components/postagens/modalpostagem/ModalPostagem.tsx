import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

import "reactjs-popup/dist/index.css";
import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button
            className="rounded text-white 
                         border-white border-solid border-2 py-2 px-4 
                          hover:scale-105 hover:text-purple-300 hover:border-violet-400
                          hover:bg-gray-500 hover:bg-opacity-25 transition-all"
          >
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;

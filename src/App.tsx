import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PaginaBase from "./pages/paginaBase/PaginaBase";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import FormTema from "./components/temas/formtema/FormTema";
import DeletarTema from "./components/temas/deletartema/DeletarTema";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens";
import FormPostagem from "./components/postagens/formpostagem/FormPostagem";
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route index element={<Login />} />
            <Route path="/" element={<PaginaBase />}>
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route
                path="/deletarpostagem/:id"
                element={<DeletarPostagem />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

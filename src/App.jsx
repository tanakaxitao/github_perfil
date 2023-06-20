import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 3 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && <Formulario />}
      <button
        onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
        type="button"
      >
        toglle form
      </button> */}
    </>
  );
}

export default App;

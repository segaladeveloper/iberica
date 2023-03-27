import './App.css';
import { useCurrentUser } from 'thin-backend-react';
import { useState } from 'react';
import Constantes from './Constantes';
import Home from './Home/Home';
import Cursos from './Cursos/Cursos';

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);

  return (
    <div className="App">
      <div onClick={() => setPagina(Constantes.PAGINAS.HOME)}>HOME</div>
      <div onClick={() => setPagina(Constantes.PAGINAS.CURSOS)}>CURSOS</div>

    
      {pagina === Constantes.PAGINAS.HOME ?
        <Home />
      : <></>}
      {pagina === Constantes.PAGINAS.CURSOS ?
        <Cursos />
      : <></>}

    </div>
  );
}

export default App;

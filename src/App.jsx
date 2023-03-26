import './App.css';
import { useCurrentUser } from 'thin-backend-react';
import { useState } from 'react';
import Constantes from './Constantes';

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);

  return (
    <div className="App">
    
      {page === Constantes.PAGINAS.HOME ?
        <Home />
      : <></>}
      {page === Constantes.PAGINAS.CURSOS ?
        <Cursos />
      : <></>}

    </div>
  );
}

export default App;

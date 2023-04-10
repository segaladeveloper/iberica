import './App.css';
// import { useCurrentUser } from 'thin-backend-react';
import React, { useState, useEffect } from 'react';
import Constantes from './Constantes';
import Home from './Pages/Home/Home';
import Cursos from './Pages/Cursos/Cursos';
import Instituicoes from './Pages/Instituicoes/Instituicoes';
import { useCurrentUser } from 'thin-backend-react';
import Registro from './Pages/Registro/Registro';
import Cadastro from './Pages/Cadastro/Cadastro';
import Navbar from './Components/Navbar';
import { LoginAndSignUp } from 'thin-backend-react/auth-ui';

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);
  const userLogado = useCurrentUser();

  useEffect(() => {
    console.log('userLogado', userLogado)
    setPagina(Constantes.PAGINAS.HOME)
  }, [userLogado]);

  return (
    <div className="App">
      <Navbar setPagina={setPagina} userLogado={userLogado}/>
    
      {pagina === Constantes.PAGINAS.HOME ? <Home /> : <></>}
      {pagina === Constantes.PAGINAS.CURSOS ? <Cursos /> : <></>}
      {pagina === Constantes.PAGINAS.INSTITUICOES ? <Instituicoes /> : <></>}
      {pagina === Constantes.PAGINAS.LOGIN ? <LoginAndSignUp /> : <></>}
      {pagina === Constantes.PAGINAS.CADASTRO ? <Cadastro/> : <></>}

    </div>
  );
}

export default App;

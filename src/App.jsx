import './App.css';
// import { useCurrentUser } from 'thin-backend-react';
import React, { useState, useEffect } from 'react';
import Constantes from './Constantes';
import Home from './Pages/Home/Home';
import Niveis from './Pages/Nivel/Nivel';
import Cursos from './Pages/Cursos/Cursos';
import Instituicoes from './Pages/Instituicoes/Instituicoes';
import { useCurrentUser } from 'thin-backend-react';
//import Registro from './Pages/Registro/Registro';
import Navbar from './Components/Navbar';
import { LoginAndSignUp } from 'thin-backend-react/auth-ui';
import Cad_Nivel from './Pages/Cad_Nivel/Cad_Nivel';
import Cad_Instituicao from './Pages/Cad_Instituicao/Cad_Instituicao';
import Cad_Curso from './Pages/Cad_Curso/Cad_Curso';

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);
  const userLogado = useCurrentUser();

  useEffect(() => {
    console.log('userLogado', userLogado)
    setPagina(Constantes.PAGINAS.HOME)
  }, [userLogado]);

  return (
    <div className="App">
      <Navbar pagina={pagina} setPagina={setPagina} userLogado={userLogado}/>
    
      {pagina === Constantes.PAGINAS.HOME ? <Home /> : <></>}
      {pagina === Constantes.PAGINAS.NIVEL ? <Niveis /> : <></>}
      {pagina === Constantes.PAGINAS.CURSOS ? <Cursos /> : <></>}
      {pagina === Constantes.PAGINAS.INSTITUICOES ? <Instituicoes /> : <></>}
      {pagina === Constantes.PAGINAS.LOGIN ? <LoginAndSignUp /> : <></>}
      {pagina === Constantes.PAGINAS.CAD_NIVEL ? <Cad_Nivel/> : <></>}
      {pagina === Constantes.PAGINAS.CAD_INSTITUICAO ? <Cad_Instituicao/> : <></>}
      {pagina === Constantes.PAGINAS.CAD_CURSO ? <Cad_Curso/> : <></>}
    </div>
  );
}

export default App;

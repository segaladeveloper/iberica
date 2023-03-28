import './App.css';
// import { useCurrentUser } from 'thin-backend-react';
import React, { useState } from 'react';
import Constantes from './Constantes';
import Home from './Pages/Home/Home';
import Cursos from './Pages/Cursos/Cursos';
import Instituicoes from './Pages/Instituicoes/Instituicoes';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
//import Navbar from './Components/Navbar';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <div className="App">
      <header>
            <h3>Logo</h3>
            <nav  ref={navRef}> 
                <a href="/#" onClick={() => setPagina(Constantes.PAGINAS.HOME)}>Home</a>                
                <a href="/#" onClick={() => setPagina(Constantes.PAGINAS.CURSOS)}>Cursos</a>
                <a href="/#" onClick={() => setPagina(Constantes.PAGINAS.INSTITUICOES)}>Instituições</a>
                <a href="/#" onClick={() => setPagina(Constantes.PAGINAS.LOGIN)}>Login</a>
                <a href="/#" onClick={() => setPagina(Constantes.PAGINAS.REGISTRO)}>Registro</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>

      {/* <React.Fragment>
        <Navbar/>
      </React.Fragment> */}
    
      {pagina === Constantes.PAGINAS.HOME ? <Home /> : <></>}
      {pagina === Constantes.PAGINAS.CURSOS ? <Cursos /> : <></>}
      {pagina === Constantes.PAGINAS.INSTITUICOES ? <Instituicoes /> : <></>}
      {pagina === Constantes.PAGINAS.LOGIN ? <Login /> : <></>}
      {pagina === Constantes.PAGINAS.REGISTRO ? <Registro/> : <></>}

    </div>
  );
}

export default App;

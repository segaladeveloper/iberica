/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.css';
import Constantes from '../Constantes';
import { logout } from 'thin-backend';
import { loginWithRedirect } from 'thin-backend';

function Navbar({setPagina, userLogado}){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <div className="logo"><img src={'logo192.png'} alt='logo'/></div>
            
            <nav ref={navRef}> 
                <a onClick={() => {showNavBar(); setPagina(Constantes.PAGINAS.HOME)}}>Home</a>
                
                {userLogado ? 
                <>
                    <a onClick={() => setPagina(Constantes.PAGINAS.CAD_NIVEL)}>Nivel</a>
                    <a onClick={() => setPagina(Constantes.PAGINAS.CAD_INSTITUICAO)}>Instituições</a>
                    <a onClick={() => setPagina(Constantes.PAGINAS.CAD_CURSO)}>Cursos</a>
                    <a onClick={logout}>Log Out</a>
                </>
                :
                <>
                    <a onClick={() => setPagina(Constantes.PAGINAS.NIVEL)}>Nivel</a>
                    <a onClick={() => setPagina(Constantes.PAGINAS.INSTITUICOES)}>Instituições</a>
                    <a onClick={() => setPagina(Constantes.PAGINAS.CURSOS)}>Cursos</a>
                    <a onClick={() => setPagina(Constantes.PAGINAS.LOGIN)}>Admin</a>
                    <a onClick={loginWithRedirect}>Log In</a>
                </> 
                }

                {/* <a onClick={() => setPagina(Constantes.PAGINAS.CADASTRO)}>Cadastro</a> */}
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
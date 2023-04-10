/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.css';
import Constantes from '../Constantes';
import LogoIberica from "../Imagens/logo_Iberica.jpeg";
import { logout } from 'thin-backend';



function Navbar({setPagina, userLogado}){
    const navRef = useRef();


    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <div>Logo  
                { userLogado?.email}
            </div>


            <nav ref={navRef}> 
                <a onClick={() => setPagina(Constantes.PAGINAS.HOME)}>Home</a>                
                <a onClick={() => setPagina(Constantes.PAGINAS.CURSOS)}>Cursos</a>
                <a onClick={() => setPagina(Constantes.PAGINAS.INSTITUICOES)}>Instituições</a>

                {userLogado ? 
                    <a onClick={logout}>Log Out</a>
                :
                <>
                    <a onClick={() => setPagina(Constantes.PAGINAS.LOGIN)}>Admin</a>
                    {/* <a onClick={() => setPagina(Constantes.PAGINAS.REGISTRO)}>Registro</a> */}
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
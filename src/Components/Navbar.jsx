/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './style.css';
import Constantes from '../Constantes';
import { logout } from 'thin-backend';
import { loginWithRedirect } from 'thin-backend';

function Navbar({pagina, setPagina, userLogado}){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    const paginasPublicas = [
        {rotulo: 'Nivel', chave: Constantes.PAGINAS.NIVEL},
        {rotulo: 'Instituições', chave: Constantes.PAGINAS.INSTITUICOES},
        {rotulo: 'Cursos', chave: Constantes.PAGINAS.CURSOS},
        // {rotulo: 'Admin', chave: Constantes.PAGINAS.LOGIN}        
    ]

    const paginasPrivadas = [
        {rotulo: 'Nivel', chave: Constantes.PAGINAS.CAD_NIVEL},
        {rotulo: 'Instituições', chave: Constantes.PAGINAS.CAD_INSTITUICAO},
        {rotulo: 'Cursos', chave: Constantes.PAGINAS.CAD_CURSO}
    ]

    return (
        <header>
            <div className="logo"><img src={'logo192.png'} alt='logo'/></div>
            
            <nav ref={navRef}> 
                <a className={pagina === Constantes.PAGINAS.HOME ? 'activePage' : ''} 
                    onClick={() => {showNavBar(); setPagina(Constantes.PAGINAS.HOME)}}>Home</a>
                
                {userLogado ? 
                <>
                    {paginasPrivadas.map(p => {
                        return <a className={pagina === p.chave ? 'activePage' : ''} 
                        onClick={() => setPagina(p.chave)}>{p.rotulo}</a>    
                    })}
                    <a onClick={logout}>Log Out</a>
                </>
                :
                <>
                    {paginasPublicas.map(p => {
                        return <a className={pagina === p.chave ? 'activePage' : ''} 
                        onClick={() => setPagina(p.chave)}>{p.rotulo}</a>    
                    })}
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
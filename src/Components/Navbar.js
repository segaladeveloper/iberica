import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../App.css';

function Navbar(){
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}> 
                <a href="/#">Home</a>
                <a href="/#">Cursos</a>
                <a href="/#">Instituições</a>
                <a href="/#">Login</a>
                <a href="/#">Registro</a>
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
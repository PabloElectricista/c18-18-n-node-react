import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 817);

    const handleClick = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 817);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="navbar">
            <Link to="/">
                <img
                    alt="logo Agenda Salud"
                    src="/logonew.png"
                    className={`nav-logo ${isMobile ? 'small-logo' : ''}`}
                />
            </Link>
            {isMobile ? (
                <button className="hamburger" onClick={handleClick}>
                    {menuOpen ? '✖' : '☰'}
                </button>
            ) : (
                <nav className="nav-links">
                    <Link className="nav-link" to='/servicios'>
                        Servicios
                    </Link>
                    <Link className="nav-link" to='/acerca-de'>
                        Acerca de
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contacto
                    </Link>
                    <Link className="nav-link" to='/preguntas'>
                        Preguntas
                    </Link>
                </nav>
            )}
            {menuOpen && isMobile && (
                <nav className="nav-links-mobile">
                    <Link className="nav-link" to='/servicios' onClick={handleClick}>
                        Servicios
                    </Link>
                    <Link className="nav-link" to='/acerca-de' onClick={handleClick}>
                        Acerca de
                    </Link>
                    <Link className="nav-link" to='/contact' onClick={handleClick}>
                        Contacto
                    </Link>
                    <Link className="nav-link" to='/preguntas' onClick={handleClick}>
                        Preguntas
                    </Link>
                </nav>
            )}
        </div>
    )
}

export default Navbar;

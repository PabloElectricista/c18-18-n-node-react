import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <img
                alt="logo Agenda Salud"
                src="/logonew.png"
                className="nav-logo"
            />
            <nav className="nav-links">
                <Link className="nav-link">
                    Servicios
                </Link>
                <Link className="nav-link">
                    Acerca de
                </Link>
                <Link className="nav-link" to='/contact'>
                    Contacto
                </Link>
                <Link className="nav-link">
                    Preguntas
                </Link>
            </nav>
        </div>
    )
}


export default Navbar
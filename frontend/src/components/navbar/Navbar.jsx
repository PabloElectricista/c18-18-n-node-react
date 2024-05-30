import './navbar.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/logonew.png"


const Navbar = () => {
    return (
        <div className="navbar">
            <img
                alt="logo Agenda Salud"
                src={logo}
                className="nav-logo"
            />
            <nav className="nav-links">
                <Link className="nav-link">
                    Servicios
                </Link>
                <Link className="nav-link">
                    Acerca de
                </Link>
                <Link className="nav-link">
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
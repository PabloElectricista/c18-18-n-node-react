import './navbarcliente.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/logonew.png"

const NavbarCliente = () => {
    return (
        <div className="navbar">
            <img
                alt="logo Agenda Salud"
                src={logo}
                className="nav-logo"
            />
            <nav className="nav-links">
                <Link className="nav-link">
                    Contacto
                </Link>
                <Link className="nav-link">
                    Mi perfil
                </Link>
            </nav>
        </div>
    )
}
export default NavbarCliente
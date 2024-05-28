import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <img
        alt="logo Agenda Salud"
        src="/logo.svg"
        className="header-logo"
      />
      <nav className="header-nav">
        <Link className="header-nav-link">
          Servicios
        </Link>
        <Link className="header-nav-link">
          Conocenos
        </Link>
        <Link className="header-nav-link">
          Contacto
        </Link>
        <Link className="header-nav-link">
          Preguntas
        </Link>
      </nav>
      <div className="header-menu">
        <svg viewBox="0 0 1024 1024" className="header-menu-icon">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Header

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SessionClose from './SessionClose';
import './navbarcliente.css';

const NavbarCliente = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('')
  const [isOpen, setIsOpen] = useState(false)

//responsive
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



  useEffect(() => {
    setCurrent((window.location.href).split('/')[3])
  }, [])

  return (
    <div className="navbar">
      <img
        alt="logo Agenda Salud"
        src="/logonew.png"
        className="nav-logo"
      />
      {
        isMobile ?(
          <button className="hamburger" onClick={handleClick}>
          {menuOpen ? '✖' : '☰'}
      </button>
        ):(
      <nav className="nav-links">
        <Link className="nav-link" to='/contact'>
          Contacto
        </Link>
        <div className="nav-link-perfil">
          <span>
            Mi perfil
          </span>
          <ul className="navbar-profilemenu-container">
            {
              current && current === 'cartillas' &&
                (
                  <li className="navbar-profilemenu-item" style={{ paddingRight: '55px' }} onClick={() => navigate('/patient')}>
                    Inicio
                  </li>
                )
            }
            {
              current && current === 'patient' &&
              (
              <li className='navbar-profilemenu-item' style={{ paddingRight: '52px' }} onClick={() => navigate('/profile')}>
              Editar
            </li>
            )
            }
            <li className="navbar-profilemenu-item" style={{ paddingRight: '25.5px' }}>
              Mis turnos
            </li>
            <li className="navbar-profilemenu-item">
              Chatea con nosotros
            </li>
            <div className='navbar-profilemenu-line'></div>
            <li className="navbar-profilemenu-close" style={{ paddingRight: '9.5px' }} onClick={() => setIsOpen(true)}>
              Cerrar sesión
            </li>
          </ul>
        </div>
      </nav>)
      }
      {
        isOpen && <SessionClose openClose={setIsOpen}/>
      }
      {
        menuOpen && isMobile && (
          <nav className="nav-links-mobile">
          <Link className="nav-link" to='/contact'>
            Contacto
          </Link>
          <div className="nav-link-perfil">
            <span>
              Mi perfil
            </span>
            <ul className="navbar-profilemenu-container">
              {
                current && current === 'cartillas' &&
                  (
                    <li className="navbar-profilemenu-item" style={{ paddingRight: '55px' }} onClick={() => navigate('/patient')}>
                      Inicio
                    </li>
                  )
              }
              {
                current && current === 'patient' &&
                (
                <li className='navbar-profilemenu-item' style={{ paddingRight: '52px' }} onClick={() => navigate('/profile')}>
                Editar
              </li>
              )
              }
              <li className="navbar-profilemenu-item" style={{ paddingRight: '25.5px' }}>
                Mis turnos
              </li>
              <li className="navbar-profilemenu-item">
                Chatea con nosotros
              </li>
              <div className='navbar-profilemenu-line'></div>
              <li className="navbar-profilemenu-close" style={{ paddingRight: '9.5px' }} onClick={() => setIsOpen(true)}>
                Cerrar sesión
              </li>
            </ul>
          </div>
        </nav>
        )
      }
    </div>
  )
}
export default NavbarCliente
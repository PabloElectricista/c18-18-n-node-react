/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer/Footer'
import scheludes from './scheludes.json'
import ClinicTable from '../components/clinicTable/ClinicTable'
import Calendar from '../components/calendar/Calendar'
import ListaDePacientes from '../components/listaDePacientes/ListaDePacientes'
import Agendar from '../components/agendarPacientes/Agendar'
import './clinic.css'
import NavbarCliente from '../components/navbar/NavbarCliente'

const Clinic = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState()
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDay, setSelectedDay] = useState(1)
  const buttoninitialState = {
    index: true,
    listado: false,
    agendar: false
  }
  const [showButtons, setShowButtons] = useState(buttoninitialState)
  useEffect(() => {
    const tkn = localStorage.getItem('tkn')
    if (!tkn) navigate('/login')
    const aux = scheludes.map(({ hour }) => { return { [hour]: false } })
    setShowMenu(aux);
  }, [])

  const handleOpenMenu = hour => {
    setShowMenu({
      ...showMenu,
      [hour]: true
    })
  }

  const handleMenuItem = (hour, item) => {
    console.log(item)
    setShowMenu({
      ...showMenu,
      [hour]: false
    })
  }

  const handleButtonsClick = selected => {
    if (selected !== 'index') {
      setShowButtons({
        ...showButtons,
        index: false,
        [selected]: true
      })
    }
    else setShowButtons(buttoninitialState)
  }

  return (
    <div className="clinic-container">
      <NavbarCliente />
      <div className="clinic-scheludes-calendar">
        <ClinicTable
          handleMenuItem={handleMenuItem}
          showMenu={showMenu}
          scheludes={scheludes}
          handleOpenMenu={handleOpenMenu}
        />
        <Calendar
          setShowCalendar={setShowCalendar}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />

      </div>
      {
        showButtons.index &&
        <div className="clinic-buttons-container">
          <button type="button" className="clinic-button1" onClick={() => handleButtonsClick('agendar')}>
            <img
              alt="agendar icon"
              src="agendar_icon.svg"
              className="clinic-vector"
            />
            <span className="clinic-text41">
              Agendar turnos
            </span>
          </button>
          <button type="button" className="clinic-button2" onClick={() => handleButtonsClick('listado')}>
            <img
              alt="listado icon"
              src="listado_icon.svg"
              className="clinic-vector1"
            />
            <span className="clinic-text43">
              Listado de pacientes
            </span>
          </button>
          <button type="button" className="clinic-button3">
            <img
              alt="novedades icon"
              src="novedades_icon.svg"
              className="clinic-vector2"
            />
            <span className="clinic-text45">
              Novedades
            </span>
          </button>
          <button type="button" className="clinic-button4">
            <img
              alt="ayuda icon"
              src="ayuda_icon.svg"
              className="clinic-icon"
            />
            <span className="clinic-text47">
              Ayuda
            </span>
          </button>
          <button type="button" className="clinic-button5">
            <img
              alt="actividad icon"
              src="actividad_icon.svg"
              className="clinic-icon1"
            />
            <span className="clinic-text49">
              Actividad
            </span>
          </button>
          <button type="button" className="clinic-button6" onClick={() => navigate('/clinic-profile')}>
            <img
              alt="perfil icon"
              src="perfil_icon.svg"
              className="clinic-icon2"
            />
            <span className="clinic-text51">
              Mi perfil
            </span>
          </button>
        </div>
      }
      {
        showButtons.listado &&
        <ListaDePacientes setShow={handleButtonsClick} />
      }
      {
        showButtons.agendar &&
        <Agendar setShow={handleButtonsClick} />
      }
      <Footer />
    </div>
  )
}

export default Clinic

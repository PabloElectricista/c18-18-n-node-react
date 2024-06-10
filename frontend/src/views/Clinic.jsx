/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer/Footer'
import scheludes from './scheludes.json'
import ClinicTable from '../components/clinicTable/ClinicTable'
import Calendar from '../components/calendar/Calendar'
import './clinic.css'

const Clinic = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState()
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDay, setSelectedDay] = useState(1)
  
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

  return (
    <div className="clinic-container">
      <Helmet>
        <title>Clínica - AgendaSalud</title>
        <meta property="og:title" content="Clinic - AgendaSalud" />
      </Helmet>
      <div className="clinic-header">
        <div className="clinic-links-container">
          <img
            alt="logo Agenda Salud"
            src="/logonew.png"
            className="nav-logo"
          />
          <span className="clinic-text">
            Agenda Salud
          </span>
        </div>
      </div>
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
      <div className="clinic-buttons-container">
        <button type="button" className="clinic-button1" onClick={() => navigate('/agendar-paciente')}>
          <img
            alt="agendar icon"
            src="agendar_icon.svg"
            className="clinic-vector"
          />
          <span className="clinic-text41">
            Agendar turnos
          </span>
        </button>
        <button type="button" className="clinic-button2" onClick={() => navigate('/lista-pacientes')} >
          <img
            alt="listado icon"
            src="listado_icon.svg"
            className="clinic-vector1"
          />
          <span className="clinic-text43">
            Listado de pacientes
          </span>
        </button>
        <button type="button" className="clinic-button3" onClick={() => navigate('/novedades')} >
          <img
            alt="novedades icon"
            src="novedades_icon.svg"
            className="clinic-vector2"
          />
          <span className="clinic-text45">
            Novedades
          </span>
        </button>
        <button type="button" className="clinic-button4" onClick={() => navigate('/ayuda')} >
          <img
            alt="ayuda icon"
            src="ayuda_icon.svg"
            className="clinic-icon"
          />
          <span className="clinic-text47">
            Ayuda
          </span>
        </button>
        <button type="button" className="clinic-button5" onClick={() => navigate('/membership')} >
          <img
            alt="membresía icon"
            src="membresia_icon.svg"
            className="clinic-icon1"
          />
          <span className="clinic-text49">
            Membresía
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
      <Footer />
    </div>
  )
}

export default Clinic

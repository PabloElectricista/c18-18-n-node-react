/* eslint-disable react-hooks/exhaustive-deps */
/*  CSS  */
import './clinic.css'

/* Componentes */
import Footer from '../../components/footer/Footer'
import Calendar from '../../components/calendar/Calendar'
import ClinicTable from '../../components/clinicTable/ClinicTable'

/*  React hooks */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

/* Redux */
import { placeAppointment } from '../../redux/slices/pabloSlices'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../../redux/actions/user'

/* Custom hooks */
import { getUserScheludes } from '../../utils/user/getAppointments'
import { current } from '../../utils/user/getDate'

/* initialState */
import scheludes from './scheludes.json'

/* Alertas */
import { toast } from 'react-toastify'

const Clinic = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { appointment } = useSelector(state => state.pablo)

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState()
  const [showCalendar, setShowCalendar] = useState(false)
  const [appointments, setAppointments] = useState(scheludes)
  const [date, setDate] = useState(current())
  const [agregado, setAgregado] = useState(false)

  useEffect(() => {
    if (!user) dispatch(updateUser())
    const aux = scheludes.map(({ hour }) => { return { [hour]: false } })
    setShowMenu(aux);
    getUserScheludes({ doctor_name: 'Martin', doctor_last_name: 'Gamboa', day: '06/13/2024', doctor_id: '666699bc7c3930c134785ae1' })
      .then(data => {
        // console.log(data);
        // let temp = [...scheludes]
        // data.forEach(({ hour, patient_name, patient_last_name }) => {
        //   for (const schelude of temp) {
        //     if (schelude.hour === hour) {
        //       schelude.patient = `${patient_name} ${patient_last_name}`
        //       break
        //     }
        //   }
        // });
        // setAppointments(temp)
      })
  }, [])

  const handleDate = (key, value) => {
    setDate({
      ...date,
      [key]: value
    })
  }

  const [count, setCount] = useState(1)
  useEffect(() => {
    // console.log(count);
    setCount(prev => prev + 1)
    // console.log(user);
    if (user && user.id) {
      let aux = {}
      if (appointment && Object.keys(appointment).length > 0) {
        aux = { ...appointment }
      }
      aux.clinic_id = user.clinic_id
      aux.specialty_id = user.specialty_id
      aux.doctor_id = user.id
      dispatch(placeAppointment(aux))
    }
  }, [user])

  const numToString = num => {
    if (num > 9) return num.toString()
    else return 0 + num.toString()
  }

  useEffect(() => {
    const dia = numToString(date.day)
    const mes = numToString(date.month)
    let aux = {}
    if (appointment && Object.keys(appointment).length > 0) {
      aux = { ...appointment }
    }
    aux.reserved_at = `${date.year}-${mes}-${dia} ${date.hour}`
    dispatch(placeAppointment(aux))
    agregado && navigate('/lista-pacientes')
  }, [date])


  const handleOpenMenu = hour => {
    setShowMenu({
      ...showMenu,
      [hour]: true
    })
  }

  const handleMenuItem = (time, item) => {
    let hour 
    if(time.length > 4) hour = time
    else hour = 0 + time
    setShowMenu({
      ...showMenu,
      [time]: false
    })
    if (item === 'agendar') {
      setDate({
        ...date,
        hour
      })
      setAgregado(true)
    }
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
          scheludes={appointments}
          handleOpenMenu={handleOpenMenu}
        />

        <Calendar
          setShowCalendar={setShowCalendar}
          dateState={date}
          changeDate={handleDate}
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
        <button type="button" className="clinic-button3" onClick={() => navigate('/novedades-clinico')} >
          <img
            alt="novedades icon"
            src="novedades_icon.svg"
            className="clinic-vector2"
          />
          <span className="clinic-text45">
            Novedades
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
        <button type="button" className="clinic-button4" onClick={() => navigate('/')} >
          {/* <img
            alt="ayuda icon"
            src="/exit_icon.svg"
            className="clinic-icon"
          /> */}
          <svg viewBox="0 0 1024 1024" className="clinic-icon">
            <path d="M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"></path>
          </svg>
          <span className="clinic-text47">
            Salir
          </span>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Clinic

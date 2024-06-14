import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './agendarPaciente.css'
import Footer from '../../components/footer/Footer'
import Agendar from '../../components/agendarPacientes/Agendar'

export default function AgendarPaciente() {
  return (
    <div className='agendarPaciente-container'>
      <Helmet>
        <title>Clinica Agendar Paciente - AgendaSalud</title>
        <meta property="og:title" content="Clinica Agendar Paciente - AgendaSalud" />
      </Helmet>
      <div className="agendarPaciente-header">
        <div className="agendarPaciente-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="agendarPaciente-back-arrow"
            />
          </Link>
          <span className="agendarPaciente-text">
            Agendar Paciente
          </span>
        </div>
      </div>
      <Agendar />
      <Footer />
    </div>
  )
}
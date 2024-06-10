import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './listaDePacientes.css'
import Footer from '../components/footer/Footer'
import ListaPacientesMain from "../components/listaDePacientes/ListaPacientesMain";

export default function ListaDePacientes() {
  return (
    <div className='listaDePacientes-container'>
      <Helmet>
        <title>Lista de Pacientes - AgendaSalud</title>
        <meta property="og:title" content="Lista de Pacientes - AgendaSalud" />
      </Helmet>
      <div className="listaDePacientes-header">
        <div className="listaDePacientes-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="listaDePacientes-back-arrow"
            />
          </Link>
          <span className="listaDePacientes-text">
            Lista de Pacientes
          </span>
        </div>
      </div>
      <ListaPacientesMain />
      <Footer />
    </div>
  )
}
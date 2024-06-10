import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './novedades.css'
import Footer from '../components/footer/Footer'
import NovedadesMain from '../components/novedades/NovedadesMain'

export default function Novedades() {
  return (
    <div className='novedades-container'>
      <Helmet>
        <title>Clinica Novedades - AgendaSalud</title>
        <meta property="og:title" content="Clinica Novedades - AgendaSalud" />
      </Helmet>
      <div className="novedades-header">
        <div className="novedades-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="novedades-back-arrow"
            />
          </Link>
          <span className="novedades-text">
            Novedades
          </span>
        </div>
      </div>
      <NovedadesMain />
      <Footer />
    </div>
  )
}
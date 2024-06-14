import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './novedadesClinico.css'
import Footer from '../../components/footer/Footer'
import NovedadesMain from '../../components/novedades/NovedadesMain'

export default function NovedadesClinico() {
  return (
    <div className='novedadesClinico-container'>
      <Helmet>
        <title>Clinica Novedades - AgendaSalud</title>
        <meta property="og:title" content="Clinica Novedades - AgendaSalud" />
      </Helmet>
      <div className="novedadesClinico-header">
        <div className="novedadesClinico-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="novedadesClinico-back-arrow"
            />
          </Link>
          <span className="novedadesClinico-text">
            Novedades
          </span>
        </div>
      </div>
      <NovedadesMain />
      <Footer />
    </div>
  )
}
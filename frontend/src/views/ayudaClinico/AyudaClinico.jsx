import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './ayudaClinico.css'
import Footer from '../../components/footer/Footer'
import AyudaMain from '../../components/ayudaMain/AyudaMain'

export default function AyudaClinico() {
  return (
    <div className='ayudaClinico-container'>
      <Helmet>
        <title>Clinica Ayuda - AgendaSalud</title>
        <meta property="og:title" content="Clinica Ayuda - AgendaSalud" />
      </Helmet>
      <div className="ayudaClinico-header">
        <div className="ayudaClinico-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="ayudaClinico-back-arrow"
            />
          </Link>
          <span className="ayudaClinico-text">
            Ayuda
          </span>
        </div>
      </div>
      <AyudaMain />
      <Footer />
    </div>
  )
}
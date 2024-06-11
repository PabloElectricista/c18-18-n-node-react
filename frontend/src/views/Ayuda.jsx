import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './ayuda.css'
import Footer from '../components/footer/Footer'
import AyudaMain from '../components/ayudaMain/AyudaMain'

export default function Ayuda() {
  return (
    <div className='ayuda-container'>
      <Helmet>
        <title>Clinica Ayuda - AgendaSalud</title>
        <meta property="og:title" content="Clinica Ayuda - AgendaSalud" />
      </Helmet>
      <div className="ayuda-header">
        <div className="ayuda-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="ayuda-back-arrow"
            />
          </Link>
          <span className="ayuda-text">
            Ayuda
          </span>
        </div>
      </div>
      <AyudaMain />
      <Footer />
    </div>
  )
}
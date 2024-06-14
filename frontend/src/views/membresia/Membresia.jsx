import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './membresia.css'
import Footer from '../../components/footer/Footer'
import MembresiaMain from '../../components/membresia/MembresiaMain'

export default function Membresia() {
  return (
    <div className='membresia-container'>
      <Helmet>
        <title>Clinica Membresía - AgendaSalud</title>
        <meta property="og:title" content="Clinica Membresía - AgendaSalud" />
      </Helmet>
      <div className="membresia-header">
        <div className="membresia-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="membresia-back-arrow"
            />
          </Link>
          <span className="membresia-text">
            Membresia
          </span>
        </div>
      </div>
      <MembresiaMain/>
      <Footer />
    </div>
  )
}
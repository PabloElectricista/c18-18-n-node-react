import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './metodoDePagoScreen.css'
import Footer from '../../components/footer/Footer'
import PagoSeleccionMain from '../../components/pagoseleccion/PagoSeleccionMain'
import { useState } from 'react'
import Temp from '../../components/membresia/Temp'

export default function MetodoDePagoScreen() {

  const [plataforma, setPlataforma] = useState()
  const handleSelection = opcion => {
    setPlataforma(opcion)
  }

  return (
    <div className='metodoScreen-container'>
      <Helmet>
        <title>Elección de metodo  - AgendaSalud</title>
        <meta property="og:title" content="Elección de metodo de pago - AgendaSalud" />
      </Helmet>
      <div className="metodoScreen-header">
        <div className="metodoScreen-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="metodoScreen-back-arrow"
            />
          </Link>
          <span className="metodoScreen-text">
            Método de pago
          </span>
        </div>
      </div>
      {
        (!plataforma || plataforma !== 'Paypal' ) && <PagoSeleccionMain seleccion={handleSelection}/>
      }
      {
        plataforma === 'Paypal' && <Temp />
      }
      <Footer />
    </div>
  )
}
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import './pagoSeleccionMain.css'

const PagoSeleccionMain = ({ seleccion }) => {
  const navigate = useNavigate()
  return (
    <div className="pago-seleccion-main-container">
      <div className="pago-seleccion-main-container1">
        <span className="pago-seleccion-main-text">
          Selecciona tu forma de pago
        </span>
        <div className="pago-seleccion-main-container2">
          <div className="pago-seleccion-main-container3" onClick={() => seleccion('Paypal')}>
            <label className="pago-seleccion-main-text1">Paypal</label>
            <img
              src="/next_icon.svg"
              alt="next icon"
              className="pago-seleccion-main-image"
            />
          </div>
          <div className="pago-seleccion-main-container4" onClick={() => seleccion('Stripe')}>
            <label className="pago-seleccion-main-text2">Stripe</label>
            <img
              src="/next_icon.svg"
              alt="next icon"
              className="pago-seleccion-main-image1"
            />
          </div>
          <div className="pago-seleccion-main-container5" onClick={() => seleccion('Mercadopago')}>
            <label className="pago-seleccion-main-text3">Mercadopago</label>
            <img
              src="/next_icon.svg"
              alt="next icon"
              className="pago-seleccion-main-image2"
            />
          </div>
          <button
            className="pago-seleccion-main-cancelar"
            onClick={() => navigate('/membership')}
          >
            cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PagoSeleccionMain

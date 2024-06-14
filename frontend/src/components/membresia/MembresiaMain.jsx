import './membresiaMain.css'
import { useNavigate } from 'react-router-dom'
const payments = {
  proximoPago: '1.000',
  vencimiento: '05/07/2024',
  metododepago: 'PayPal',
  emaildepaypal: 'suemail@depaypal.com',
  estadoUltimoPago: 'exitoso'
}

const MembresiaMain = () => {
  const navigate = useNavigate()
  
  return (
    <div className="membresiaMain-container">
      <div className="membresiaMain-container1">
        <div className="membresiaMain-container2">
          <span className="membresiaMain-text">Su próximo pago</span>
          <div className="membresiaMain-container3">
            <h3 className="membresiaMain-proximo-pago">
              $1.000
            </h3>
          </div>
          <div className="membresiaMain-container4">
            {
              true ?
                <span>Vence: </span>
                :
                <span className="membresiaMain-text05">Venció el: </span>
            }
            <span>{payments.vencimiento}</span>
          </div>
          <button
            type="button"
            className="membresiaMain-button" onClick={() => navigate('/metodo-de-pago-screen')}
          >
            <span className="membresiaMain-text07">
              pagar ahora
            </span>
          </button>


        </div>
        <div className="membresiaMain-container5">
          <span className="membresiaMain-text10">Método de pago</span>
          <span>{payments.metododepago}</span>
          <span>{payments.emaildepaypal}</span>
        </div>
        <div className="membresiaMain-container6">
          <span className="membresiaMain-text13">Último pago</span>
          <div className="membresiaMain-container7">
            <span>$1.000</span>
            <span className="membresiaMain-text18">{payments.estadoUltimoPago}</span>
          </div>
          <div className="membresiaMain-container8">
            <span>
              el día: 05/06/2024
            </span>
            <button type="button" className="membresiaMain-button1">
              Ver todos los pagos
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="membresiaMain-button2">
        finalizar membresía
      </button>
    </div>
  )
}

export default MembresiaMain

import './membresiaMain.css'
const payments = {
  proximoPago: '1.000',
  vencimiento: '05/07/2024',
  metododepago: 'PayPal',
  emaildepaypal: 'suemail@depaypal.com',
  estadoUltimoPago: 'exitoso'
}

const MembresiaMain = () => {
  return (
    <div className="membresiaMain-container">
      <div className="membresiaMain-container1">
        <div className="membresiaMain-container2">
          <span className="membresiaMain-text">Su próximo pago</span>
          <div className="membresiaMain-container3">
            <h3 className="membresiaMain-proximo-pago">
              <span>1.000</span>
              <br></br>
            </h3>
            <h3>$</h3>
          </div>
          <div className="membresiaMain-container4">
            <span>Vence: </span>
            <span className="membresiaMain-text05">Venció el: </span>
            <span>{payments.vencimiento}</span>
          </div>
          <button type="button" className="membresiaMain-button">
            <span className="membresiaMain-text07">
              <span>pagar ahora</span>
              <br></br>
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
            <span>$</span>
            <span>
              <span>1.000</span>
              <br></br>
            </span>
            <span className="membresiaMain-text18">{payments.estadoUltimoPago}</span>
          </div>
          <div className="membresiaMain-container8">
            <span>
              <span>el día:</span>
              <br></br>
            </span>
            <span>
              <span>05/06/2024</span>
              <br></br>
            </span>
          </div>
        </div>
        <button type="button" className="membresiaMain-button1">
          <span className="membresiaMain-text25">
            <span>Ver todos los pagos</span>
            <br></br>
          </span>
        </button>
      </div>
      <button type="button" className="membresiaMain-button2">
        Darse de baja
      </button>
    </div>
  )
}

export default MembresiaMain

import ButtonPayPal from "../pagos/payPal/ButtonPayPal"
import './temp.css'

const Temp = ({ setShow }) => {
  return <div className="temp-container">
    <div className="but-cont">
      <span className="temp-title">Usted va a abonar $7 (USD)</span>
      <span style={{maxWidth: '200px'}}>Por 1 mes de membresía en nuestra plataforma de turnos</span>
      <ButtonPayPal value={7} />
      <button className="temp-close" onClick={() => setShow(false)}>cancelar</button>
    </div>
  </div>
}

export default Temp

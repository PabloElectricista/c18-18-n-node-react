import { useNavigate } from "react-router-dom"
import ButtonPayPal from "../pagos/payPal/ButtonPayPal"
import './temp.css'

const Temp = () => {
  const navigate = useNavigate()
  return <div className="temp-container">
    <div className="but-cont">
      <span className="temp-title">Usted va a abonar $7 (USD)</span>
      <span style={{ maxWidth: '200px' }}>Por 1 mes de membresía en Agenda Salud</span>
      <ButtonPayPal value={7} />
      <button
        className="temp-cancelar"
        onClick={() => navigate('/membership')}
      >
        cancelar
      </button>
    </div>
  </div>
}

export default Temp

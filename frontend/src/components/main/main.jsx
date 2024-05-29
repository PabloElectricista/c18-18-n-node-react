import './main.css'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  return (
    <div className="main-main">
      <div className="main-frame7">
        <div className="main-frame8">
          <span className="main-text">
            Agenda Salud
          </span>
          <span className="main-text02">
            Facilitando tu acceso a la Salud
          </span>
        </div>
        <span className="main-text04">
          Nuestra misión es brindarte el mejor servicio para vos y tu familia
          facilitando tu acceso a la salud
        </span>
        <div className="main-frame5">
          <span className="main-text06">
            <span>Ingresar aquí</span>
          </span>
          <div className="main-frame6">
            <button type="button" className="mybutton" onClick={() => navigate('/clinic')}>
              Soy profesional
            </button>
            <button type="button" className="mybutton" onClick={() => navigate('/patient')}>
              Soy paciente
            </button>
          </div>
        </div>
      </div>
      <div className="main-frame9">
        <img alt="Hero Image" src="/heroimg-400h.png" className="main-foto1" />
      </div>
    </div>
  )
}

export default Main

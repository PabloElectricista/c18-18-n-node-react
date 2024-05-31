import { useNavigate } from 'react-router-dom'
import './mainPatient.css'

const MainPatient = () => {
  const navigate = useNavigate()
  return (
    <div className="main-patient-main-patient">
      <img
        alt="patient hero image"
        src="/patient_hero.png"
        className="main-patient-hero"
      />
      <div className="main-patient-container">
        <span className="main-patient-text">
          ¿En qué podemos ayudarte?
        </span>
        <button type="button" onClick={() => navigate('/cartillas')} className="main-patient-button ">
          <span className='main-patient-text02' >
            Solicitar turno
          </span>
        </button>
      </div>
      <div className="main-patient-services">
        <div className="main-patient-services-container">
          <span className="main-patient-text04">
            Servicios más solicitados:
          </span>
          <div className="main-patient-frame7">
            <div className="main-patient-service-card">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">
                  Pediatría
                </span>
              </div>
            </div>
            <div className="main-patient-service-card1">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">Cardiología</span>
              </div>
            </div>
            <div className="main-patient-service-card2">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">Ginecología</span>
              </div>
            </div>
            <div className="main-patient-service-card3">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">
                  Clínica
                </span>
              </div>
            </div>
            <div className="main-patient-service-card4">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">
                  Traumatología
                </span>
              </div>
            </div>
            <div className="main-patient-service-card5">
              <div className="main-patient-text-container">
                <span className="main-patient-card-text">
                  Nutrición
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPatient

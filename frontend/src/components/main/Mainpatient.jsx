import { useNavigate } from 'react-router-dom';

import './mainPatient.css';

const MainPatient = () => {
  const navigate = useNavigate()
  return (
    <div className="main-patient-main-patient">
      <img
        alt="Rectangle101568"
        src="/patient_hero.png"
        className="main-patient-patient-hero"
      />
      <div className="main-patient-patient">
        <span className="main-patient-text">
          ¿En qué podemos ayudarte?
        </span>
        <button type="button" className="main-patient-button" onClick={()=>navigate('/cartillas')}>
          Solicitar turno
        </button>
      </div>
      <div className="main-patient-services">
        <div className="main-patient-container">
          <span className="main-patient-text04">
            <span>Servicios más solicitados:</span>
          </span>
          <div className="main-patient-frame7">
            <div className="main-patient-service-card">
              <div className="main-patient-rectangle18">
                <span className="main-patient-text06">
                  <span>Pediatría</span>
                </span>
              </div>
            </div>
            <div className="main-patient-service-card1">
              <div className="main-patient-rectangle181">
                <span className="main-patient-text08">Cardiología</span>
              </div>
            </div>
            <div className="main-patient-service-card2">
              <div className="main-patient-rectangle182">
                <span className="main-patient-text09">Ginecología</span>
              </div>
            </div>
            <div className="main-patient-service-card3">
              <div className="main-patient-rectangle183">
                <span className="main-patient-text10">
                  <span>Clínica</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="main-patient-service-card4">
              <div className="main-patient-rectangle184">
                <span className="main-patient-text13">
                  <span>Traumatología</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="main-patient-service-card5">
              <div className="main-patient-rectangle185">
                <span className="main-patient-text16">
                  <span>Nutrición</span>
                  <br></br>
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

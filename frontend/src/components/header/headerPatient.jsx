import './HeaderPatient.css'

const HeaderPatient = () => {
  return (
    <div className="header-patient-header-patient">
      <img
        alt="logo Agenda Salud"
        src="/logonew.png"
        className="header-patient-logo"
      />
      <div className="header-patient-frame2">
        <span className="header-patient-text">Contacto</span>
        <span className="header-patient-text2">Mi Perfil</span>
      </div>
      <div className="header-patient-container">
        <svg viewBox="0 0 1024 1024" className="header-patient-icon">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>
    </div>
  )
}

export default HeaderPatient

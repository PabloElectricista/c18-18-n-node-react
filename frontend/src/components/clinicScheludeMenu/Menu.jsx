import './menu.css'
export default function Menu({ handleMenu, patient, isAvailable }) {
  const handleMenuItem = ev => {
    handleMenu(patient, ev.target.id)
  }
  return (
    <div className="menu-clinic-container">
      {
        isAvailable ?
          <span className="menu-clinic-text1" id="agendar" onClick={handleMenuItem}>
            Agendar paciente
          </span>
          :
          <>
            <span className="menu-clinic-text2" id="ausente" onClick={handleMenuItem}>
              Reprogramar cita
            </span>
            <span className="menu-clinic-text3" id="ausente" onClick={handleMenuItem}>
              Reportar ausente
            </span>
            <span className="menu-clinic-text4" id="editar" onClick={handleMenuItem}>
              cancelar
            </span>
          </>
      }
    </div>
  )
}

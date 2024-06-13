import './menu.css'
export default function Menu({ handleMenu, patient }) {
  const handleMenuItem = ev => {
    handleMenu(patient, ev.target.id)
  }
  return (
    <div className="menu-clinic-container">
      <span className="menu-clinic-text3" id="ausente" onClick={handleMenuItem}>
        Marcar como ausente
      </span>
      <span className="menu-clinic-text4" id="editar" onClick={handleMenuItem}>
        Editar
      </span>
    </div>
  )
}

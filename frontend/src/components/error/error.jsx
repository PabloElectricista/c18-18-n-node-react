import { useNavigate, useRouteError } from "react-router-dom"
import "./error.css"

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <h1>No se pudo acceder este sitio web</h1>
        <p className="error-text">Comprueba si hubo un error en la petición</p>
        <p className="error-text">Si no la hubo, prueba ejecutar el diagnóstico de red de tu sistema operativo.</p>
        <p className="error-text">Error: {error.statusText || error.message}</p>
        <div className="button-container">
          <button className="error-button" onClick={() => window.location.reload()}>Volver a Cargar</button>
          <button className="error-button" onClick={handleNavigate}>Ir a Inicio</button>
        </div>
      </div>
    </div>
  )
}

export default Error

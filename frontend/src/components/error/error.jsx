import { useRouteError } from "react-router-dom"

function Error () {
  const error = useRouteError()
  return (
    <div>
      <h1>No se pudo acceder este sitio web</h1>
      <p>Comprueba si hubo un error en la petición</p>
      <p>Si no la hubo, prueba ejecutar el diagnóstico de red de tu sistema operativo.</p>
      <p>{error.statusText || error.message}</p>
      <button onClick={() => window.location.reload()}>Volver a Cargar</button>
    </div>
  )
}

export default Error

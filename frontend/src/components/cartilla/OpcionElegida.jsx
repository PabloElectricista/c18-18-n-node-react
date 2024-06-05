import React from 'react'
import "./opcionElegida.css"

const OpcionElegida = ({opcion, anularOpcion}) => {

    const eliminarOpcion = () =>{
        anularOpcion(null)
    }

    return (
        <div className='container'>
            <span className='texto'>Opcion elegida: {opcion}</span>
            <button onClick={()=>{eliminarOpcion()}} className='buttonCerrar'>X</button>
        </div>
    )
}

export default OpcionElegida
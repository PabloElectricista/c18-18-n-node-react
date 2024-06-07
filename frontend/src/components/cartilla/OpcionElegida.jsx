import React from 'react'
import "./opcionElegida.css"

const OpcionElegida = ({opcion, anularOpcion, textOpcion}) => {

    const eliminarOpcion = () =>{
        anularOpcion(null)
    }

    return (
        <div className='container'>
            <span className='texto'>{textOpcion}: {opcion}</span>
            <button onClick={()=>{eliminarOpcion()}} className='buttonCerrar'>X</button>
        </div>
    )
}

export default OpcionElegida
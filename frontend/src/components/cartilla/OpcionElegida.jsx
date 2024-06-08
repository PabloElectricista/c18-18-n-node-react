/* eslint-disable react/prop-types */
import "./opcionElegida.css"

const OpcionElegida = ({opcion, anularOpcion, textOpcion}) => {

    const eliminarOpcion = () =>{
        if(opcion === 1){
            anularOpcion(1)
        }
        else{
            anularOpcion(null)
        }
    }

    return (
        <div className='container'>
            <span className='texto'>{textOpcion}: {opcion}</span>
            <button onClick={()=>{eliminarOpcion()}} className='buttonCerrar'>X</button>
        </div>
    )
}

export default OpcionElegida
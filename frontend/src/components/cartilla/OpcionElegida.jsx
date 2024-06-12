/* eslint-disable react/prop-types */
import "./opcionElegida.css"

const OpcionElegida = ({opcion, anularOpcion, textOpcion, dataAdicional}) => {

    const eliminarOpcion = () =>{
        if(opcion){
            anularOpcion()
        }
        else{
            anularOpcion(null)
        }
    }

    return (
        <div className='container'>
            <span className='texto'>{textOpcion}: {opcion}{dataAdicional}</span>
            <button onClick={()=>{eliminarOpcion()}} className='buttonCerrar'>X</button>
        </div>
    )
}

export default OpcionElegida
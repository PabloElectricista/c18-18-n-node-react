/* eslint-disable react/prop-types */
import "./buttonBuscarCartilla.css"

const ButtonBuscarCartilla = ({info}) => {

    const mostrarValores = () =>{
        console.log(info)
    }

    return (
        <>
            <button className='buttonBuscar' onClick={()=>mostrarValores()} >Buscar</button>
        </>
    )
}

export default ButtonBuscarCartilla
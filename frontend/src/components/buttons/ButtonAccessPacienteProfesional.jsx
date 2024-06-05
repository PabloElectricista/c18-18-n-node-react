/* eslint-disable react/prop-types */
//BOTON QUE SIRVE PARA INDEX (acceso de pacientes y profesionales)
import { useDispatch } from "react-redux"
import "./buttonAccess.css"
import { useNavigate } from 'react-router-dom'
import { cargarFake } from "../../redux/actions/user"
const ButtonAccessPacienteProfesional = ({ titleButton, redireccionar }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(cargarFake(redireccionar))
        navigate(`/${redireccionar}`)
    }

    return (
        <button className="ButtonAcc" onClick={handleClick} >{titleButton}</button>
    )
}

export default ButtonAccessPacienteProfesional
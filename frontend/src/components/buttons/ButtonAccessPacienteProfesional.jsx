/* eslint-disable react/prop-types */
//BOTON QUE SIRVE PARA INDEX (acceso de pacientes y profesionales)
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { cargarFake } from "../../redux/actions/user"

import "./ButtonAccess.css"

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
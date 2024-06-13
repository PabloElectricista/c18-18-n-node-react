/* eslint-disable react/prop-types */
//BOTON QUE SIRVE PARA INDEX (acceso de pacientes y profesionales)
import { useNavigate } from 'react-router-dom';
import "./buttonAccess.css";

const ButtonAccessPacienteProfesional = ({ titleButton, redireccionar }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${redireccionar}`)
    }

    return (
        <button className="ButtonAcc" onClick={handleClick} >{titleButton}</button>
    )
}

export default ButtonAccessPacienteProfesional
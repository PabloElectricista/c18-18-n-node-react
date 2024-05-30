//BOTON QUE SIRVE PARA INDEX (acceso de pacientes y profesionales)
import "./buttonAccess.css"
import { useNavigate } from 'react-router-dom'
const ButtonAccessPacienteProfesional = ({titleButton, redireccionar}) => {
const navigate = useNavigate()

    return (
        <>
            <button className="ButtonAcc" onClick={() => navigate(`/${redireccionar}`)} >{titleButton}</button>
        </>
    )
}

export default ButtonAccessPacienteProfesional
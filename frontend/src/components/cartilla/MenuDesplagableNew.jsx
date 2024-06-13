import { useState } from 'react';
import "./menudesplegable.css";
import arrowDown from "../../assets/cartilla/arrow.svg"
import OpcionElegida from './OpcionElegida';

const MenuDesplagableNew = ({ data, titleButton, dataOpcion, dataOpcion2, dataElegida, saveData,setNameClinic,setNameSpecialty,setNameProfesional ,mostrarOpcion}) => {

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = () => {
        setOpenSubMenuId(openSubMenuId === null ? true : null);
    };


// esta funcion recibe el valor del id que se haya elegido en cada desplegable para gestionar con la bd
//por otra parte, guarda data necesaria para el rendering
    const guardarValor = (id, name, lastname, nameClinic) => {
        if (titleButton === "Clinica") {
            setNameClinic(nameClinic)
            saveData(id)
        }
        if (titleButton === "Especialidad") {
            setNameSpecialty(name)
            saveData(id)
        }
        if (titleButton === "Profesional") {
            setNameProfesional(name+" "+lastname)
            saveData(id)
        }
        setOpenSubMenuId(null)
    }


    return (
        <div className='dropdown'>
            <div className='submenu'>
                <button
                    className='dropbtn'
                    onClick={() => toggleSubMenu()}
                >
                    {titleButton}
                </button>
                <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                <div className={`dropdown-content ${openSubMenuId ? 'show' : ''}`}>
                    <div className='opcionesDesplegable'>
                        {data.map((opcion, index) => (
                            <button
                                key={index}
                                onClick={() => guardarValor(opcion.id, opcion.name, opcion.last_name, opcion.name_clinic)}>
                                {opcion[dataOpcion]} {dataOpcion2 && opcion[dataOpcion2] && `${opcion[dataOpcion2]}`}
                            </button>
                        ))}
                    </div>
                </div>
                {
                    dataElegida ?
                        <OpcionElegida textOpcion={titleButton} opcion={mostrarOpcion} anularOpcion={saveData} /> : null
                }
                <hr className='hrDesplegable' />
            </div>
        </div>
    )
}

export default MenuDesplagableNew
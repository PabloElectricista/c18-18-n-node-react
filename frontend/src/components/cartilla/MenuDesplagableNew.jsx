import { useState } from 'react';
import "./menudesplegable.css";
import arrowDown from "../../assets/cartilla/arrow.svg"

const MenuDesplagableNew = ({ data,titleButton, dataOpcion, dataOpcion2, saveData, openDes, openDesFunc }) => {

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = () => {
        setOpenSubMenuId(openSubMenuId === null ? true : null);
    };

    const guardarValor = (id) => {
        if(titleButton === "Clinica") {
            console.log(id)
            saveData(id)
        }
        if(titleButton === "Especialidad") {
            console.log(id)
            saveData(id)
        }
        if(titleButton === "Profesional") {
            console.log(id)
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
                <div className={`dropdown-content ${openSubMenuId  ? 'show' : ''}`}>
                    <div className='opcionesDesplegable'>
                        {data.map((opcion, index) => (
                            <button key={index} onClick={()=>guardarValor(opcion.id)}>{opcion[dataOpcion]} {dataOpcion2 && opcion[dataOpcion2] && `${opcion[dataOpcion2]}`}</button>
                        ))}
                    </div>
                </div>
                {/* <div className='testContainer'>
                    {submenu.id === 1 && localidadSelected && <OpcionElegida opcion={localidadSelected} anularOpcion={setLocalidadSelected} textOpcion="Localidad elegida" />}
                    {submenu.id === 2 && clinica && <OpcionElegida opcion={clinica} anularOpcion={setclinica} textOpcion="Clinica elegida" />}
                    {submenu.id === 3 && especialidad && <OpcionElegida opcion={especialidad} anularOpcion={setespecialidad} textOpcion="Especialidad elegida" />}
                    {submenu.id === 4 && profesional && <OpcionElegida opcion={profesional} anularOpcion={setProfesional} textOpcion="Profesional elegido" />}
                </div> */}
                <hr className='hrDesplegable' />
            </div>
        </div>
    )
}

export default MenuDesplagableNew
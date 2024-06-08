import { useState } from 'react';

import "./menudesplegable.css";
import arrowDown from "../../assets/cartilla/arrow.svg";

const MenuDesplegable = ({ dataDesplegable, idOpcion, setLocalidadSelected,setclinica,setespecialidad,setProfesional}) => {
    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    const guardarValor = (opcion) =>{
        if(openSubMenuId === 1){
            setLocalidadSelected(opcion)
        }
        if(openSubMenuId === 2){
            setclinica(opcion)
        }
        if(openSubMenuId === 3){
            setespecialidad(opcion)
        }
        if(openSubMenuId === 4){
            setProfesional(opcion)
        }
        setOpenSubMenuId(null)
    }

    return (
        <div className='dropdown'>
            {dataDesplegable.map((submenu) => (
                <div key={submenu.id} className='submenu'>
                    <button
                        className='dropbtn'
                        onClick={() => toggleSubMenu(submenu.id)}
                    >
                        {submenu.menuTitle}
                    </button>
                    <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                    <div className={`dropdown-content ${openSubMenuId === submenu.id ? 'show' : ''}`}>
                        <div className='opcionesDesplegable'>
                            {submenu.opciones.map((opcion, index) => (
                                <button key={index} onClick={()=>guardarValor(opcion)} >{opcion}</button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuDesplegable;

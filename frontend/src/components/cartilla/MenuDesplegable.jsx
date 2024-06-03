import React, { useState } from 'react';
import "./menudesplegable.css";
import arrowDown from "../../assets/cartilla/arrow.svg"

const MenuDesplegable = ({ dataDesplegable, idOpcion, useCredencialSelected,setBusquedaSelected,setDondeAtenderSelected}) => {
    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    const guardarValor = (opcion) =>{
        if(idOpcion === 1){
            useCredencialSelected(opcion)
        }
        if(idOpcion === 2){
            setBusquedaSelected(opcion)
        }
        if(idOpcion === 3){
            setDondeAtenderSelected(opcion)
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

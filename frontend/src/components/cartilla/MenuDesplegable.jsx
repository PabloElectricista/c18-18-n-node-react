import React, { useState } from 'react';
import "./menudesplegable.css";

const MenuDesplegable = ({ dataDesplegable }) => {
    const [openMenuId, setOpenMenuId] = useState(null);

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    return (
        <div className='dropdown'>
            <div className='opcionesButton'>
                {dataDesplegable.map((p) => (
                    <button
                        key={p.id}
                        className='dropbtn'
                        onClick={() => toggleMenu(p.id)}
                    >
                        {p.menuTitle}
                    </button>
                ))}
            </div>
            {dataDesplegable.map((p) => (
                <div
                    key={p.id}
                    className={`dropdown-content ${openMenuId === p.id ? 'show' : ''}`}
                >
                    <div className='opcionesDesplegable'>
                        {p.opciones.map((opcion, index) => (
                            <span key={index}>{opcion}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuDesplegable;

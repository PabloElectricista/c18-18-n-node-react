import { useState } from 'react';

//
import data from "../../views/cartillafechahoradata.json";
import arrowDown from "../../assets/cartilla/arrow.svg";
import "./Menufechahora.css";

const MenuFechaHora = () => {

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    const guardarValor = (opcion) =>{
        if(openSubMenuId === 1){
            console.log(opcion)
        }
        if(openSubMenuId === 2){
            console.log(opcion)
        }
        setOpenSubMenuId(null)
    }
    return (
        <div className='dropdown'>
            {data.map((f) => (
                <div key={f.id} className='submenu'>
                    <button
                        className='dropbtn'
                        onClick={() => toggleSubMenu(f.id)}
                    >
                        {f.menuTitle}
                    </button>
                    <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                    <div className={`dropdown-content ${openSubMenuId === f.id ? 'show' : ''}`}>
                        <div className='opcionesDesplegable'>
                            {f.opciones.map((opcion, index) => (
                                <button key={index} onClick={()=>guardarValor(opcion)} >{opcion}</button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuFechaHora
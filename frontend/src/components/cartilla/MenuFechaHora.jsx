<<<<<<< HEAD
import "./menufechahora.css"
import data from "../../views/cartillaHorariosData.json"
=======
>>>>>>> main
import { useState } from 'react'
import data from "../../views/cartillafechahoradata.json"
import arrowDown from "../../assets/cartilla/arrow.svg"
<<<<<<< HEAD
import HorasDisponibles from "./HorasDisponibles"
import Calendar from "./Calendar"
=======
import "./menufechahora.css"
>>>>>>> main

const MenuFechaHora = () => {

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const [horaElegida, setHoraElegida] = useState(null)
    console.log(horaElegida)

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    return (
            <div className='dropdown'>
            <h2 className='title'>Seleccione día y horario</h2>
                {data.map((f) => (
                    <div key={f.id} className='submenu'>
                        <button
                            className='dropbtn'
                            onClick={() => toggleSubMenu(f.id)}
                        >
                            {f.menuTitle}
                        </button>
                        <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                        {
                            openSubMenuId === f.id ? <HorasDisponibles setHoraElegida={setHoraElegida} setOpenSubMenuId={setOpenSubMenuId} /> : null
                        }
                        <Calendar />
                    </div>
                ))}
            </div>
    )
}

export default MenuFechaHora
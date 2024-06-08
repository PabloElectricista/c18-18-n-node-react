
import "./menufechahora.css"
import data from "../../views/cartillaHorariosData.json"
import { useState } from 'react'
import arrowDown from "../../assets/cartilla/arrow.svg"
import HorasDisponibles from "./HorasDisponibles"
import Calendar from "../calendar/Calendar"

const MenuFechaHora = () => {

    //calendar

    const [showMenu, setShowMenu] = useState()
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDay, setSelectedDay] = useState(1)

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const [horaElegida, setHoraElegida] = useState(null)
    console.log(horaElegida)

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    const handleCalendar = () => {
        setShowCalendar(showCalendar === true ? null : true)
    }

    return (
        <div className='dropdown'>
            <h2 className='title'>Seleccione día y horario</h2>
            <div>
                {data.map((f) => (
                    <div key={f.id} className='submenuFechahora'>
                        <button
                            className='dropbtn fechahora'
                            onClick={() => toggleSubMenu(f.id)}
                        >
                            {f.menuTitle}
                        </button>
                        <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                        {
                            openSubMenuId === f.id ? <HorasDisponibles setHoraElegida={setHoraElegida} setOpenSubMenuId={setOpenSubMenuId} /> : null
                        }
                    </div>
                ))}
                <div className='submenuFechahora'>
                    <button
                        className='dropbtn fechahora'
                        onClick={() => handleCalendar()}
                    >
                        Día
                    </button>
                    <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                        {
                            showCalendar ?
                            <div className="calendarContainer"> <Calendar
                                setShowCalendar={setShowCalendar}
                                selectedDay={selectedDay}
                                setSelectedDay={setSelectedDay}
                            />                    </div> : null
                        }
                </div>
            </div>

        </div>
    )
}

export default MenuFechaHora
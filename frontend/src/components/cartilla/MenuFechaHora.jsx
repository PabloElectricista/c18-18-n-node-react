
import "./menufechahora.css"
import data from "../../views/cartillaHorariosData.json"
import { useState } from 'react'
import arrowDown from "../../assets/cartilla/arrow.svg"
import HorasDisponibles from "./HorasDisponibles"
import OpcionElegida from "./OpcionElegida"
import CalendarCartillas from "../calendar/CalendarCartillas"

const MenuFechaHora = () => {

    //calendar

    const [showMenu, setShowMenu] = useState()
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    const [ selectedMonth, setSelectedMonth] = useState(0)
    const [selectedYear,setSelectedYear] = useState(0)

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const [horaElegida, setHoraElegida] = useState(null)

    const toggleSubMenu = (id) => {
        setOpenSubMenuId(openSubMenuId === id ? null : id);
    };

    const handleCalendar = () => {
        setShowCalendar(showCalendar === true ? null : true)
    }

    console.log(selectedDay)

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
                            horaElegida ? <OpcionElegida opcion={horaElegida} anularOpcion={setHoraElegida} textOpcion="Hora elegida" /> : null
                        }
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
                            selectedDay != null ? <OpcionElegida opcion={`${selectedDay}/${selectedMonth + 1}/${selectedYear}`} anularOpcion={setSelectedDay} textOpcion="Dia elegido" /> : null
                        }
                        {
                            showCalendar ?
                            <div className="calendarContainer"> <CalendarCartillas
                                setShowCalendar={setShowCalendar}
                                selectedDay={selectedDay}
                                setSelectedDay={setSelectedDay}
                                setSelectedMonth={setSelectedMonth}
                                setSelectedYear={setSelectedYear}
                            /></div> : null
                        }
                </div>
            </div>

        </div>
    )
}

export default MenuFechaHora
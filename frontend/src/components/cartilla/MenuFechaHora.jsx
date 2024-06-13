
import "./menufechahora.css"
// import data from "../../views/cartillaHorariosData.json"
import { useEffect, useState } from 'react'
import arrowDown from "../../assets/cartilla/arrow.svg"
import HorasDisponibles from "./HorasDisponibles"
import OpcionElegida from "./OpcionElegida"
import CalendarCartillas from "../calendar/CalendarCartillas"

const MenuFechaHora = ({ dataSchedulers ,horaElegida, setHoraElegida, setFechaElegida }) => {


    const date = new Date()
    const [horariosDisponibles, setHorariosDisponibles] = useState([])

    const idBusqueda = "666698b2f8f9b0e0fc0bcf3e"

    const getHorariosById = (id) => {
        let testHorariosID = dataSchedulers.filter((d) => d.doctor_id === id)
        return testHorariosID
    }

    useEffect(() => {
        const horarios = getHorariosById(idBusqueda)
        setHorariosDisponibles(horarios)
    }, [idBusqueda, dataSchedulers])


    //calendar

    const [showMenu, setShowMenu] = useState()
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
    const [selectedYear, setSelectedYear] = useState(date.getFullYear())

    useEffect(()=>{
        const formatDate = () =>{
            return `${selectedMonth}/${selectedDay}/${selectedYear}`
        }
        setFechaElegida(formatDate)
    },[selectedDay])

    const [openSubMenuId, setOpenSubMenuId] = useState(null);

    const toggleSubMenu = () => {
        setOpenSubMenuId(openSubMenuId === null ? true : null);
    };


    const handleCalendar = () => {
        setShowCalendar(showCalendar === true ? null : true)
    }

    return (
        <div className='dropdownFH'>
            <h2 className='title'>Seleccione día y horario</h2>
            <div className="containerFh">
                <div>
                    <button
                        className='dropbtn fechahora'
                        onClick={() => toggleSubMenu()}
                    >
                        Horario
                    </button>
                    <img src={arrowDown} alt='arrowDown' className='arrowDown' />
                    {
                        horaElegida ? <OpcionElegida opcion={horaElegida} anularOpcion={setHoraElegida} textOpcion="Hora elegida" dataAdicional="hs" /> : null
                    }
                    {
                        openSubMenuId ? <HorasDisponibles setHoraElegida={setHoraElegida} setOpenSubMenuId={setOpenSubMenuId} horariosDisponibles={horariosDisponibles} /> : null
                    }
                    <hr className='hrDesplegable' />
                </div>
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
                                selectedMonth={selectedMonth}
                                selectedYear={selectedYear}
                                setSelectedDay={setSelectedDay}
                                setSelectedMonth={setSelectedMonth}
                                setSelectedYear={setSelectedYear}
                            /></div> : null
                    }
                    <hr className='hrDesplegable' />
                </div>
            </div>

        </div>
    )
}

export default MenuFechaHora
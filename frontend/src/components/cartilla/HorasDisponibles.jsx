import React, { useEffect, useState } from 'react'
import horasCartillas from "../../views/cartillaHorariosData.json"
import "./horasdisponibles.css"

const HorasDisponibles = ({ setHoraElegida, setOpenSubMenuId, horariosDisponibles }) => {

    const [opcionesData, setOpcionesData] = useState([])
    useEffect(() => {
        const appointments = horariosDisponibles[0].appointments
        setOpcionesData(Object.entries(appointments))
    }, [horariosDisponibles])

    const handleHour = (h) =>{
        setHoraElegida(h)
        setOpenSubMenuId(null)
    }

    return (
        <div className='containerHoras'>
            {opcionesData.map(([hour, value], index) => (
                <button
                    key={index}
                    className={value === null ? "horas" : "horasElegidas"}
                    onClick={()=>{handleHour(hour)}}
                >
                    {hour} hs
                </button>
            ))}
        </div>
    )
}

export default HorasDisponibles

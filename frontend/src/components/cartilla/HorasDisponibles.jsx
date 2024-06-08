import React from 'react'
import horasCartillas from "../../views/cartillaHorariosData.json"
import "./horasdisponibles.css"

const HorasDisponibles = ({setHoraElegida , setOpenSubMenuId}) => {

    const opciones = horasCartillas.length > 0 ? horasCartillas[0].opciones : [];

    const handleHour = (h) =>{
        setHoraElegida(h)
        setOpenSubMenuId(null)
    }

    return (
        <div className='containerHoras'>
            {
                opciones.map((h, index) => (
                    <button key={index} className='horas' onClick={()=>handleHour(h)}>{h}</button>
                ))
            }
        </div>
    )
}

export default HorasDisponibles

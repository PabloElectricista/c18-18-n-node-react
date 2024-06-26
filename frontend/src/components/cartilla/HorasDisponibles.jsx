import React, { useEffect, useState } from 'react'
import horasCartillas from "../../views/cartillaHorariosData.json"
import "./horasdisponibles.css"

const HorasDisponibles = ({ setHoraElegida, setOpenSubMenuId, horariosDisponibles, fechaParaHoras, setScheduler }) => {

    const [schedulersCorregidos, setSchedulersCorregidos] = useState(null)
    const [opcionesData, setOpcionesData] = useState([])
    useEffect(() => {
        const refactorDia = horariosDisponibles.map(h => {
            const [date] = h.created_at.split(' ');
            return {
                ...h,
                created_at: date,
            };
        });
        setSchedulersCorregidos(refactorDia)
    }, [horariosDisponibles])

    useEffect(() => {
        if (!schedulersCorregidos) return;
        let dataHorarios = schedulersCorregidos.filter((d) => d.created_at === fechaParaHoras);
        setScheduler(dataHorarios[0].id)
        if (dataHorarios.length > 0) {
            const appointments = dataHorarios[0].appointments;
            setOpcionesData(Object.entries(appointments));
        } else {
            setOpcionesData([]); // Manejo de caso cuando no hay coincidencias
        }
    }, [schedulersCorregidos, fechaParaHoras]);


    const handleHour = (h) => {
        setHoraElegida(h)
        setOpenSubMenuId(null)
    }

    const formattedArray = opcionesData.map(([time, value]) => {
        let hours = Math.floor(time);
        let minutes = (time % 1) === 0.5 ? '30' : '00';
        let formattedTime = minutes === '00' ? `${hours}` : `${hours}:${minutes}`;
        return [formattedTime, value];
    });

    const timeToMinutes = time => {
        let [hours, minutes] = time.split(':').map(Number);
        if (isNaN(minutes)) minutes = 0;
        return hours * 60 + minutes;
    };

    const sortedArray = formattedArray.sort((a, b) => {
        return timeToMinutes(a[0]) - timeToMinutes(b[0]);
    });

    return (
        <div className='containerHoras'>
            {sortedArray.map(([hour, value], index) => (
                <button
                    key={index}
                    className={value === null ? "horas" : "horasElegidas"}
                    onClick={() => { handleHour(hour) }}
                >
                    {hour} hs
                </button>
            ))}
        </div>
    )
}

export default HorasDisponibles

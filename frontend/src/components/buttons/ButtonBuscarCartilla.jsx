/* eslint-disable react/prop-types */
import "./buttonBuscarCartilla.css"
import { useDispatch, useSelector } from "react-redux";
import { createNewAppointment } from "../../redux/thunks/appointmentsThunk";
import { useEffect, useState } from "react";

const ButtonBuscarCartilla = ({ info, clinica, especialidad, profesional, horaElegida, fechaElegida }) => {


    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY3MzZhNDk5NjdiNTIyNTdiMDc4YWQiLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTcxODA0MDIyOCwiZXhwIjoxNzIzMjI0MjI4fQ.s4XxAGKNmT4zdQY0tHg43RfzZPjDgVBKQrOu6wU3NSE"
    const dispatch = useDispatch()
    const [horaFinal, setHoraFinal] = useState()
    const [date, setDate] = useState()
    const [appointmentData, setAppointmentData] = useState({})

    useEffect(() => {
        const handleNumber = (horaElegida) => {

            if (Number.isInteger(horaElegida)) {
                return `${horaElegida}:00:00`
            }
            else {
                const truncatedHour = Math.trunc(horaElegida);
                return `${truncatedHour}:30:00`
            }
        }
        setHoraFinal(handleNumber(horaElegida))
    }, [horaElegida ,fechaElegida])

    useEffect(() => {
        if(fechaElegida != null){
            setDate(`${fechaElegida} ${horaFinal}`)
        }
    }, [horaFinal, fechaElegida])

    useEffect(() => {
        if (clinica && especialidad && profesional && horaElegida && fechaElegida) {
            setAppointmentData({
                clinic_id: clinica,
                doctor_id: profesional,
                specialty_id: especialidad,
                reserved_at: date,
            })
        }

    }, [horaElegida ,clinica ,especialidad ,profesional ,fechaElegida,date])

    const mostrarValores = () => {
        if (!clinica || !especialidad || !profesional || !horaElegida || !fechaElegida) {
            console.log("FALTAN ELEGIR VARIABLES");
        } else {
            console.log(appointmentData);
            dispatch(createNewAppointment(token,appointmentData))
        }
    };

    return (
        <>
            <button className='buttonBuscar' onClick={() => mostrarValores()} >Buscar</button>
        </>
    )
}

export default ButtonBuscarCartilla
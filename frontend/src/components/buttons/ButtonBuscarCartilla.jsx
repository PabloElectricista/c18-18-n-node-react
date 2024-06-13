/* eslint-disable react/prop-types */
import "./buttonBuscarCartilla.css"
import { useDispatch, useSelector } from "react-redux";
import { createNewAppointment } from "../../redux/thunks/appointmentsThunk";
import { useEffect, useState } from "react";

const ButtonBuscarCartilla = ({ info, clinica, especialidad, profesional, horaElegida, fechaElegida }) => {


    let token = localStorage.getItem('tkn')
    console.log(token)
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
            dispatch(createNewAppointment({token,data: appointmentData}))
        }
    };

    return (
        <>
            <button className='buttonBuscar' onClick={() => mostrarValores()} >Buscar</button>
        </>
    )
}

export default ButtonBuscarCartilla
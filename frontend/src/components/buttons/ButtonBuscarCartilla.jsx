/* eslint-disable react/prop-types */
import "./buttonBuscarCartilla.css"
import { useDispatch, useSelector } from "react-redux";
import { createNewAppointment } from "../../redux/thunks/appointmentsThunk";
import { useEffect, useState } from "react";
import { Bounce, toast } from 'react-toastify';
import { useNavigate, Link } from "react-router-dom";

const ButtonBuscarCartilla = ({ info, clinica, especialidad, profesional, horaElegida, fechaElegida, scheduler }) => {

    const navigate = useNavigate()
    let token = localStorage.getItem('tkn')
    const dispatch = useDispatch()
    const [horaFinal, setHoraFinal] = useState()
    const [date, setDate] = useState()
    const [appointmentData, setAppointmentData] = useState({})
    const [varIncompletas, setVarIncompletas] = useState(false)
    const appointments = useSelector(state => state.appointments)

    useEffect(() => {
        const handleNumber = (horaElegida) => {
            if (horaElegida) {
                return `${horaElegida}:00`
            }
        }
        setHoraFinal(handleNumber(horaElegida))
    }, [horaElegida, fechaElegida])

    useEffect(() => {
        if (fechaElegida != null) {
            setDate(`${fechaElegida} ${horaFinal}`)
        }
    }, [horaFinal, fechaElegida])

    useEffect(() => {
        if (clinica && especialidad && profesional && horaElegida && fechaElegida) {
            setVarIncompletas(false)
            setAppointmentData({
                scheduler_id: scheduler,
                clinic_id: clinica,
                doctor_id: profesional,
                specialty_id: especialidad,
                reserved_at: date,
            })
        }

    }, [horaElegida, clinica, especialidad, profesional, fechaElegida, date])

    useEffect(()=>{
        setTimeout(() => {
            setVarIncompletas(false)
        }, 4000);
    },[varIncompletas])

    const mostrarValores = () => {
        if (!clinica || !especialidad || !profesional || !horaElegida || !fechaElegida) {
            setVarIncompletas(true)
        } else {
            console.log(appointmentData);
            dispatch(createNewAppointment({ token, data: appointmentData }))
            toast.success('Listo! Verifica tus turnos', {
                toastId: 'success1',
                position: 'bottom-left',
                transition: Bounce,
                autoClose: 1500,
                onClose:()=>{
                    navigate('/my-appointments')
                }
            })
        }
    };

    return (
        <>
            <div className="buttonAndSpan">
                {
                    varIncompletas ? <span className="spanVariables">AUN FALTA COMPLETAR CAMPOS PARA CONTINUAR</span> : null
                }
                    <button className='buttonBuscar' onClick={()=>mostrarValores()}>Agendar</button>
            </div>
        </>
    )
}

export default ButtonBuscarCartilla
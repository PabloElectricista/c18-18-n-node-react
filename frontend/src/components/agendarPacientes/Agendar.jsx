import { useEffect, useState } from 'react'
import './agendar.css'
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import axios from 'axios';
// import axios from 'axios'

const Agendar = () => {
  const { appointment } = useSelector(state => state.pablo)
  const initialState = {
    nombre: '',
    apellido: '',
    dni: '',
    fecha: '',
    hora: '',
    observaciones: ''
  }
  const [data, setData] = useState(initialState)
  useEffect(() => {
    if (appointment && Object.keys(appointment).length > 0) {
      const first = appointment.patient_name
      const last = appointment.patient_last_name
      const dni = appointment.patient_dni
      setData({
        ...data,
        nombre: first ? first : '',
        apellido: last ? last : '',
        dni: dni ? dni : ''
      })
    }
  }, [])

  const handleChange = ev => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!data) return
    let aux = { ...data }
    aux.clinic_id = appointment.clinic_id
    aux.doctor_id = appointment.doctor_id
    aux.specialty_id = appointment.specialty_id
    setData(initialState)
    toast.info('Pacienteagendado correctamente')
    try {
      console.log(aux);
      const res = await axios.post('/appointments', { aux },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY3MzZhNDk5NjdiNTIyNTdiMDc4YWQiLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTcxODA0MDIyOCwiZXhwIjoxNzIzMjI0MjI4fQ.s4XxAGKNmT4zdQY0tHg43RfzZPjDgVBKQrOu6wU3NSE'
          }
        }
      )
      console.log(res);
      toast.info('Pacienteagendado correctamente')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="agendar-container">
      <div className="agendar-header">
        <span className="agendar-text02">Datos, Fecha y Hora</span>
      </div>
      <form className="agendar-container01" onSubmit={handleSubmit}>
        <div className="agendar-container02">
          <div className="agendar-container03">
            <div className="agendar-nombre">
              <span className="agendar-text03">Nombre</span>
            </div>
            <input
              type="text"
              className="agendar-textinput"
              onChange={handleChange}
              value={data.nombre}
              name='nombre'
            />
          </div>
          <div className="agendar-container04">
            <div className="agendar-apellido">
              <span className="agendar-text04">Apellido</span>
            </div>
            <input
              type="text"
              className="agendar-textinput1"
              onChange={handleChange}
              value={data.apellido}
              name='apellido'
            />
          </div>
          <div className="agendar-container05">
            <div className="agendar-header1">
              <span className="agendar-text05">DNI</span>
            </div>
            <input
              type="text"
              className="agendar-textinput2"
              onChange={handleChange}
              value={data.dni}
              name='dni'
            />
          </div>
        </div>
        <div className="agendar-container06">
          <div className="agendar-container07">
            <div className="agendar-fecha">
              <span className="agendar-text06">Fecha</span>
            </div>
            <input
              type="date"
              className="agendar-textinput3"
              onChange={handleChange}
              value={data.fecha}
              name='fecha'
            />
          </div>
          <div className="agendar-container08">
            <div className="agendar-hora">
              <span className="agendar-text07">Hora</span>
            </div>
            <input
              type="time"
              className="agendar-textinput4"
              onChange={handleChange}
              value={data.hora}
              name='hora'
            />
          </div>
        </div>
        <div className="agendar-container09">
          <div className="agendar-observaciones">
            <span className="agendar-text08">Observaciones</span>
          </div>
          <textarea
            rows="4"
            className="agendar-textarea"
            onChange={handleChange}
            value={data.observaciones}
            name='observaciones'
          ></textarea>
        </div>
        <div className="agendar-container-buttons">
          <button type="button" className="agendar-button">
            <span className="agendar-text01" onClick={() => setData(initialState)}>borrar</span>
          </button>
          <button type="submit" className="agendar-button1">
            <span className="agendar-text09">
              Agendar
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Agendar

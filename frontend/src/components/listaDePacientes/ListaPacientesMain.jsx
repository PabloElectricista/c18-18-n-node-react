/* eslint-disable react/prop-types */
import './listaPacientesMain.css'
// import { pacientes } from "./lista";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listar } from "./crear";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { placeAppointment } from '../../redux/slices/pabloSlices'

export default function ListaPacientesMain() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { appointment } = useSelector(state => state.pablo)
  const [pacientes, setPacientes] = useState([])
  useEffect(() => {
    // pacientes.slice(1).forEach(element => {
    //   let paciente = {...element}
    //   let dni = paciente.patient_dni.toString()
    //   let phone = paciente.phone.toString()
    //   paciente.patient_dni = dni
    //   paciente.phone = phone
    //   useCrear(paciente)
    // });
    listar()
      .then(data => {
        const lista = data.slice(0, 20)
        setPacientes(lista)
      })
      .catch(error => console.error(error))
  }, [])

  const handleReport = () => {
    toast.warning('paciente reportado')
  }

  const handleAgendar = ({ patient_name, patient_last_name, patient_dni, patient_id }) => {
    let aux = {}
    if (appointment && Object.keys(appointment).length > 0) {
      aux = { ...appointment }
    }
    aux.patient_name = patient_name
    aux.patient_last_name = patient_last_name
    aux.patient_dni = patient_dni
    aux.patient_id = patient_id
    dispatch(placeAppointment(aux))
    navigate('/agendar-paciente')
  }

  return (
    <div className="listaMain-container">
      <table className='listaMain-table'>
        <thead>
          <tr>
            <th className='listaMain-th'></th>
            <th className='listaMain-th'>Nombre/s</th>
            <th className='listaMain-th'>Apellido</th>
            <th className='listaMain-th'>Telefono</th>
            <th className='listaMain-th'>DNI</th>
            <th className='listaMain-th'>contactar</th>
            <th className='listaMain-th'>acciones</th>
          </tr>
        </thead>
        <tbody className='listaMain-tbody'>
          {
            pacientes && pacientes.length > 0 ?
              pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td className='listaMain-td'>{index + 1}</td>
                  <td className='listaMain-td'>{paciente.name}</td>
                  <td className='listaMain-td'>{paciente.last_name}</td>
                  <td className='listaMain-td'>{paciente.phone}</td>
                  <td className='listaMain-td'>{paciente.patient_dni}</td>
                  <td className='listaMain-td'><Link to={`mailto:${paciente.email}`}>correo</Link></td>
                  <td className='listaMain-td'>
                    <button className='listaMain-button-agendar' onClick={() => handleAgendar({
                      patient_name: paciente.name, patient_last_name: paciente.last_name, patient_dni: paciente.patient_dni, patient_id: paciente.id
                    })}>agendar</button>
                    <button className='listaMain-button-reportar' onClick={handleReport}>reportar</button>
                  </td>
                </tr>
              ))
              :
              <tr>
                <td className='listaMain-td'>1</td>
                <td className='listaMain-td'></td>
                <td className='listaMain-td'></td>
                <td className='listaMain-td'></td>
                <td className='listaMain-td'></td>
                <td className='listaMain-td'></td>
                <td className='listaMain-td'></td>
              </tr>


          }
        </tbody>
      </table>
    </div>
  )
}
/* eslint-disable react/prop-types */
import './listaPacientesMain.css'
import { pacientes } from "./lista";
import { Link } from 'react-router-dom';

export default function ListaPacientesMain() {
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
          </tr>
        </thead>
        <tbody className='listaMain-tbody'>
          {
            pacientes && pacientes.length > 0 ?
              pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td className='listaMain-td'>{index}</td>
                  <td className='listaMain-td'>{paciente.name}</td>
                  <td className='listaMain-td'>{paciente.last_name}</td>
                  <td className='listaMain-td'>{paciente.phone}</td>
                  <td className='listaMain-td'>{paciente.patient_dni}</td>
                  <td className='listaMain-td'><Link to={`mailto:${paciente.email}`}>correo</Link></td>
                </tr>
              ))
              :
              <tr>
                <td className='listaMain-td'>1</td>
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
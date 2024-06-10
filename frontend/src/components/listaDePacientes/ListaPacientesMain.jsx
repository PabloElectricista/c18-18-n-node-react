/* eslint-disable react/prop-types */
import './listaPacientesMain.css'
import { pacientes } from "./lista";

export default function ListaPacientesMain() {
  return (
    <div className="listaMain-container">
      <div className="listaMain-heading">
        <span className='listaMain-title'>Lista de pacientes</span>
      </div>
      <table className='listaMain-table'>
        <thead>
          <tr>
            <th className='listaMain-th'></th>
            <th className='listaMain-th'>Nombre/s</th>
            <th className='listaMain-th'>Apellido</th>
            <th className='listaMain-th'>Telefono</th>
            <th className='listaMain-th'>Email</th>
            <th className='listaMain-th'></th>
          </tr>
        </thead>
        <tbody className='listaMain-tbody'>
          {
            pacientes && pacientes.length > 0 ?
              pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td className='listaMain-td'>{index}</td>
                  <td className='listaMain-td'>{paciente.nombre}</td>
                  <td className='listaMain-td'>{paciente.apellido}</td>
                  <td className='listaMain-td'>{paciente.telefono}</td>
                  <td className='listaMain-td'>{paciente.email}</td>
                  <td className='listaMain-td'><button className='listaMain-reportar-button'>Reportar</button></td>
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
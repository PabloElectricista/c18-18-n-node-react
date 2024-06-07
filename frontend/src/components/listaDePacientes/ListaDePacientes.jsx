import './listaDePacientes.css'
import { pacientes } from "./lista";

export default function ListaDePacientes({ setShow }) {
  return (
    <div className="lista-container">
      <div className="lista-heading">
        <span className='listado-title'>Listado de pacientes</span>
        <button className='listado-button-close' onClick={() => setShow('index')}>
          Cerrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre/s</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            pacientes && pacientes.length > 0 ?
              pacientes.map((paciente, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{paciente.nombre}</td>
                  <td>{paciente.apellido}</td>
                  <td>{paciente.telefono}</td>
                  <td>{paciente.email}</td>
                </tr>
              ))
              :
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>


          }
        </tbody>
      </table>
    </div>
  )
}
import React from "react";
import "./patientRecordsTable.css";

const PatientRecordsTable = ({ nombre, DNI, historialCitas }) => {
  // Construimos el objeto paciente internamente
  const paciente = {
    nombre,
    DNI,
    historialCitas
  };

  return (
    <div className="historial-container">
      <h2>{`Historial de Citas de ${paciente.nombre} (DNI: ${paciente.DNI})`}</h2>
      <table className="historial-tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Médico</th>
            <th>Especialidad</th>
            <th>Clínica</th>
            <th>Sala</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paciente.historialCitas.map((cita, index) => (
            <tr key={index}>
              <td>{cita.fecha}</td>
              <td>{cita.medico}</td>
              <td>{cita.especialidad}</td>
              <td>{cita.clinica}</td>
              <td>{cita.sala}</td>
              <td>
                <button>Imprimir</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRecordsTable;

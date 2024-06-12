import React from "react";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../../redux/slices/appointmentsSlices"; // Importa la acción para eliminar cita
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfRenderer from "../pdfRenderer/PdfRenderer";
import "./patientRecordsTable.css";

const PatientRecordsTable = ({ citasPaciente }) => {
 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id)); // Llama a la acción deleteAppointment con el ID de la cita
  };

  const fecha = new Date().toLocaleDateString().replace(/\//g, '-');

  return (
    <div className="historial-container">
      <h2>{`Historial de Citas de ${citasPaciente.paciente.name} ${citasPaciente.paciente.last_name} DNI: ${citasPaciente.paciente.patient_dni}`}</h2>
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
          {citasPaciente.historialCitas.map((cita, index) => (
            <tr key={index}>
              <td>{cita.fechaDeLaCita}</td>
              <td>{`${cita.medico.name} ${cita.medico.last_name}`}</td>
              <td>{cita.medico.specialty}</td>
              <td>{cita.clinica.name_clinic}</td>
              <td>{cita.clinica.room_number}</td>
              <td>
                <PDFDownloadLink
                  document={
                    <PdfRenderer
                      paciente={citasPaciente.paciente}
                      medico={cita.medico}
                      clinica={cita.clinica}
                      fechaCita={cita.fechaDeLaCita}
                    />
                  }
                  fileName={`${citasPaciente.paciente.name}-${citasPaciente.paciente.last_name}_${cita.fechaDeLaCita.replace(/\//g, '-')}.pdf`}
                >
                  {({ loading }) => loading ? (
                    <button>Cargando...</button>
                  ) : (
                    <button>Descargar</button>
                  )}
                </PDFDownloadLink>
                <button onClick={() => handleDelete(cita.id)}>Eliminar cita</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRecordsTable;

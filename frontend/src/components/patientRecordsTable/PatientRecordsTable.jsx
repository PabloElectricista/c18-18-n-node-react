import React from "react";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../../redux/thunks/appointmentsThunk";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfRenderer from "../pdfRenderer/PdfRenderer";
import "./patientRecordsTable.css";

const PatientRecordsTable = ({ citasPaciente }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <div className="historial-container">
      <h2>Historial de Citas</h2>
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
          {citasPaciente.map((cita, index) => (
            <tr key={index}>
              <td>{cita.reserved_at}</td>
              <td>{`${cita.doctor_name} ${cita.doctor_last_name}`}</td>
              <td>{cita.specialty_name}</td>
              <td>{cita.name_clinic || "No disponible"}</td>
              <td>{cita.room_number}</td>
              <td>
                <PDFDownloadLink
                  document={
                    <PdfRenderer
                      pacientePDF={{
                        name: cita.patient_name,
                        last_name: cita.patient_last_name,
                        patient_dni: cita.patient_dni || "N/A", // Asegúrate de que patient_dni está disponible
                      }}
                      medicoPDF={{
                        name: cita.doctor_name,
                        last_name: cita.doctor_last_name,
                        specialty: cita.specialty_name,
                      }}
                      clinicaPDF={{
                        name_clinic: cita.clinica || "No disponible",
                        room_number: cita.room_number,
                      }}
                      fechaCitaPDF={cita.reserved_at}
                    />
                  }
                  fileName={`${cita.patient_name}-${cita.patient_last_name}_${cita.reserved_at.replace(/\//g, '-')}.pdf`}
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

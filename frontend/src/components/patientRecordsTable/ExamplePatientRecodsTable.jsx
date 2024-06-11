import React from "react";
import PatientRecordsTable from "./PatientRecordsTable";

const ExamplePatientRecordsTable = () => {
  // example data
  const nombre = "Juan Pérez";
  const DNI = "12345678";
  const historialCitas = [
    {
      medico: "Dr. García",
      especialidad: "Cardiología",
      fecha: "2024-01-10",
      clinica: "Clínica Santa María",
      sala: "1"
    },
    {
      medico: "Dra. Fernández",
      especialidad: "Dermatología",
      fecha: "2024-02-15",
      clinica: "Clínica San José",
      sala: "3"
    },
    {
      medico: "Dr. López",
      especialidad: "Pediatría",
      fecha: "2024-03-20",
      clinica: "Clínica La Paz",
      sala: "5"
    },
    {
      medico: "Dra. Martínez",
      especialidad: "Ginecología",
      fecha: "2024-04-10",
      clinica: "Clínica Central",
      sala: "2"
    },
    {
      medico: "Dr. Ruiz",
      especialidad: "Traumatología",
      fecha: "2024-05-05",
      clinica: "Clínica Santa Clara",
      sala: "4"
    },
    {
      medico: "Dra. Ramírez",
      especialidad: "Neurología",
      fecha: "2024-06-25",
      clinica: "Clínica San Pedro",
      sala: "6"
    },
    {
      medico: "Dr. Jiménez",
      especialidad: "Oncología",
      fecha: "2024-07-30",
      clinica: "Clínica General",
      sala: "7"
    }
  ];

  return (
    <div>
      <PatientRecordsTable nombre={nombre} DNI={DNI} historialCitas={historialCitas} />
    </div>
  );
};

export default ExamplePatientRecordsTable;

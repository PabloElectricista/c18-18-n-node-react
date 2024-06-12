import React from "react";
import PatientRecordsTable from "./PatientRecordsTable";

const ExamplePatientRecordsTable = () => {
  // example data
  const paciente = {
    paciente: {
      name: "Omar",
      last_name: "Rodriguez",
      patient_dni: 114560247
    },
    historialCitas: [
      {
        medico: {
          name: "Michaela",
          last_name: "Quinn",
          specialty: "Medicina general",
        },
        clinica: {
          name_clinic: "Clínica Sandia",
          room_number: "101",
        },
        fechaDeLaCita: "12-12-3012",
      },
      {
        medico: {
          name: "Gregory",
          last_name: "House",
          specialty: "Diagnóstico",
        },
        clinica: {
          name_clinic: "Clínica San Jorge",
          room_number: "202",
        },
        fechaDeLaCita: "15-01-3013",
      },
      {
        medico: {
          name: "Meredith",
          last_name: "Grey",
          specialty: "Cirugía General",
        },
        clinica: {
          name_clinic: "Clínica Central",
          room_number: "303",
        },
        fechaDeLaCita: "20-02-3013",
      },
      {
        medico: {
          name: "John",
          last_name: "Watson",
          specialty: "Medicina Interna",
        },
        clinica: {
          name_clinic: "Clínica Santa Clara",
          room_number: "404",
        },
        fechaDeLaCita: "25-03-3013",
      },
      {
        medico: {
          name: "Dana",
          last_name: "Scully",
          specialty: "Patología",
        },
        clinica: {
          name_clinic: "Clínica Buenaventura",
          room_number: "505",
        },
        fechaDeLaCita: "30-04-3013",
      },
      {
        medico: {
          name: "Derek",
          last_name: "Shepherd",
          specialty: "Neurocirugía",
        },
        clinica: {
          name_clinic: "Clínica La Esperanza",
          room_number: "606",
        },
        fechaDeLaCita: "05-05-3013",
      },
      {
        medico: {
          name: "Allison",
          last_name: "Cameron",
          specialty: "Inmunología",
        },
        clinica: {
          name_clinic: "Clínica San Rafael",
          room_number: "707",
        },
        fechaDeLaCita: "10-06-3013",
      }
    ]
  };

  return (
    <div>
      <PatientRecordsTable paciente={paciente} />
    </div>
  );
};

export default ExamplePatientRecordsTable;

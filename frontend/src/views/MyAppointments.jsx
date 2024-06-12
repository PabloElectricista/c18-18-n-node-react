import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAppointments } from "../redux/slices/appointmentsSlices"; // acción para obtener dataCitas
import PatientRecordsTable from "../components/patientRecordsTable/PatientRecordsTable";

const MyAppointments = () => {
 
const dispatch = useDispatch();

  // se monta el componente y ejecuta la función
  
  
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  // Obtén las dataCitas del store: acá ya no estoy tan seguro
 
  const dataCitas = useSelector((state) => state.appointments);

  // con dataCitas hacer dinámica la constante citasPciente

  
  const citasPaciente = {
    paciente: {
      name: "Omar",
      last_name: "Rodriguez",
      patient_dni: 114560247
    },
    historialCitas: [
      {
        id: "666911078709ad99a45ea851",
        fechaDeLaCita: "12-12-3012",
        medico: {
          name: "Michaela",
          last_name: "Quinn",
          specialty: "Medicina general",
        },
        clinica: {
          name_clinic: "Clínica Sandia",
          room_number: "101",
        }
      },
      {
        id: "666911972709ad99a45ea851",
        fechaDeLaCita: "15-01-3013",
        medico: {
          name: "Gregory",
          last_name: "House",
          specialty: "Diagnóstico",
        },
        clinica: {
          name_clinic: "Clínica San Jorge",
          room_number: "202",
        }
      },
      {
        id: "666911672709ad99a45ea851",
        fechaDeLaCita: "20-02-3013",
        medico: {
          name: "Meredith",
          last_name: "Grey",
          specialty: "Cirugía General",
        },
        clinica: {
          name_clinic: "Clínica Central",
          room_number: "303",
        }
      },
      {
        id: "666911672709ad99a45ea851",
        fechaDeLaCita: "25-03-3013",
        medico: {
          name: "John",
          last_name: "Watson",
          specialty: "Medicina Interna",
        },
        clinica: {
          name_clinic: "Clínica Santa Clara",
          room_number: "404",
        }
      },
      {
        id: "666911072702ad99a45ea851",
        fechaDeLaCita: "30-04-3013",
        medico: {
          name: "Dana",
          last_name: "Scully",
          specialty: "Patología",
        },
        clinica: {
          name_clinic: "Clínica Buenaventura",
          room_number: "505",
        }
      },
      {
        id: "666911072709ad99a55ea851",
        fechaDeLaCita: "05-05-3013",
        medico: {
          name: "Derek",
          last_name: "Shepherd",
          specialty: "Neurocirugía",
        },
        clinica: {
          name_clinic: "Clínica La Esperanza",
          room_number: "606",
        }
      },
      {
        id: "666911072709ad99a45ea651",
        fechaDeLaCita: "10-06-3013",
        medico: {
          name: "Allison",
          last_name: "Cameron",
          specialty: "Inmunología",
        },
        clinica: {
          name_clinic: "Clínica San Rafael",
          room_number: "707",
        }
      }
    ]
  };

  return (
    <div>
      <PatientRecordsTable citasPaciente={citasPaciente} />
    </div>
  );
};

export default MyAppointments;
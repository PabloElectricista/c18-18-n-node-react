import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAppointments } from "../redux/thunks/appointmentsThunk"; 
import PatientRecordsTable from "../components/patientRecordsTable/PatientRecordsTable";

const MyAppointments = () => {
  const dispatch = useDispatch();

  // Se monta el componente y ejecuta la función
  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const dataCitas = useSelector((state) => state.appointments.appointments);

  // Con dataCitas hacer dinámica la constante citasPciente
  console.log(dataCitas)
  return (
    <div>
      {/* Renderiza los datos de las citas aquí */}
      {/*<PatientRecordsTable appointments={dataCitas} />*/}
      {/*<PatientRecordsTable citasPaciente={citasPaciente} />*/}
    </div>
  );
};

export default MyAppointments;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../redux/thunks/appointmentsThunk";
//import PatientRecordsTable from "../components/patientRecordsTable/PatientRecordsTable";

const MyAppointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const dataCitas = useSelector((state) => state.appointments.appointments);
  const loading = useSelector((state) => state.appointments.loading);
  const error = useSelector((state) => state.appointments.error);

  //la data que debería llegar es más o menos esta:
  const data =
  {
    id: "666a52e81c220ee3d70ea5aa",
    patient_name: "duvan",
    patient_last_name: "rodriguez",
    doctor_name: "Martin",
    doctor_last_name: "Gamboa",
    specialty_name: "Pediatría",
    room_number: "C10",
    status: "RESERVED",
    status_date: "12/6/2024 21:01:12",
    status_logs: [
      {
        code: "RESERVED",
        date: "12/6/2024 21:01:12"
      }
    ],
    duration: 1,
    reserved_at: "06/13/2024 7:00:00",
    created_at: "12/6/2024 21:01:12"
  };


console.log("soy la dataCitas[0]", dataCitas[0]);

  return (
    <div>

    </div>
  );
};

export default MyAppointments;

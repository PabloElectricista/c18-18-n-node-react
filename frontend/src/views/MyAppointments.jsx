import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentByUser } from "../redux/thunks/appointmentsThunk";
import PatientRecordsTable from "../components/patientRecordsTable/PatientRecordsTable";

const MyAppointments = () => {
  const dispatch = useDispatch();

  // const token = useSelector((state) => state.auth.token);
  const dataCitas = useSelector((state) => state.appointments);
  const loading = useSelector((state) => state.appointments.loading);
  const error = useSelector((state) => state.appointments.error);

  const token = localStorage.getItem('tkn')

  useEffect(() => {
    if (token) {
      dispatch(getAppointmentByUser(token));
    }
  }, [dispatch, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("soy datacitas: ", dataCitas.appointments);

  return (
    <div>
      <h1>Mis citas</h1>
      <div>
        <PatientRecordsTable citasPaciente={dataCitas.appointments} />
      </div>
    </div>
  );
};

export default MyAppointments;

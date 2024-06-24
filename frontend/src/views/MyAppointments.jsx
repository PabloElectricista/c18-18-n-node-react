import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentByUser } from "../redux/thunks/appointmentsThunk";
import PatientRecordsTable from "../components/patientRecordsTable/PatientRecordsTable";

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

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

 //console.log("soy datacitas: ", dataCitas.appointments);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <div className="PatientRecordsTable">
          <PatientRecordsTable citasPaciente={dataCitas.appointments} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '0px' }}>
          <img 
            src="https://res.cloudinary.com/dqh2illb5/image/upload/v1719199733/medicine/pexels-pavel-danilyuk-7108344_r8ehv2.jpg" 
            alt="imagen de utensilios medicos" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default MyAppointments;

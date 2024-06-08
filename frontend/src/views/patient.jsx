/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeaderPatient from '../components/navbar/NavbarCliente';
import MainPatient from '../components/main/MainPatient';
import Footer from '../components/footer/Footer';
import './patient.css';

const Patient = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const tkn = localStorage.getItem('tkn')
    if (!tkn) navigate('/login')
  }, [])

  return (
    <div className="patient-container">
      <Helmet>
        <title>Patient - AgendaSalud</title>
        <meta property="og:title" content="Patient - AgendaSalud" />
      </Helmet>
      <HeaderPatient/>
      <MainPatient/>
      <Footer />
    </div>
  )
}

export default Patient

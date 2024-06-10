import { useState } from 'react';
import { Link } from 'react-router-dom';

import DoctorRegisterForm from '../components/form/DoctorForm';
import SwitchButton from '../components/buttons/SwitchButton';
import PatientRegisterForm from '../components/form/PatientForm';
import Navbar from '../components/navbar/Navbar';

import './register.css';
import Footer from '../components/footer/Footer';

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false)
  return (
    <div className='register-container'>
      <Navbar />
      <Link to="/" className='return-link'>
        <button className='return-button'>&lt;- Volver</button>
      </Link>
      <p>Si no estás registrado, crea tu cuenta completando los siguientes datos:</p>
      <SwitchButton className="switch-btn" text1="Soy paciente" text2="Soy profesional" setIsDoctor={setIsDoctor} isDoctor={isDoctor} />
      {isDoctor ? <DoctorRegisterForm /> : <PatientRegisterForm />}
      <Footer />
    </div>
  )
}

export default Register

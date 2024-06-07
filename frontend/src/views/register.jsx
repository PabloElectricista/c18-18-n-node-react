import PatientRegisterForm from '../components/form/patientForm'
import Navbar from '../components/navbar/Navbar'
import './Register.css'
import SwitchButton from '../components/buttons/SwitchButton'
import { useState } from 'react'
import DoctorRegisterForm from '../components/form/doctorForm'
import { Link } from 'react-router-dom'

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
    </div>
  )
}

export default Register

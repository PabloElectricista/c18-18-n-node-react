import PatientRegisterForm from '../components/form/patientForm'
import Navbar from '../components/navbar/Navbar'
import './register.css'

const Register = () => {
  return (
    <div className='register-container'>
      <Navbar />
      <PatientRegisterForm />
    </div>
  )
}

export default Register

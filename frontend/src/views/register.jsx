import RegisterForm from '../components/form/registerForm'
import Navbar from '../components/navbar/Navbar'
import './register.css'

const Register = () => {
  return (
    <div className='register-container'>
      <Navbar />
      <RegisterForm />
    </div>
  )
}

export default Register

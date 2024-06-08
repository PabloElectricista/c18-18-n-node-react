import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, toast } from 'react-toastify'
import { register } from '../../redux/thunks/authThunk'
import { useNavigate } from 'react-router-dom'
import './RegisterForm.css'


const DoctorRegisterForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clinic, setClinic] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signup = useSelector(state => state.auth)

  useEffect(() => {
    if (signup.user) {
      navigate(`/${signup.user.role}`)
    } else if (signup?.error) {
      toast.error(signup.error, {
        toastId: 'error1',
        position: 'bottom-left',
        transition: Bounce,
      })
    }
  }, [signup.user, signup.error, navigate])

  const handleNumberChange = (e) => {
    const number = e.target.value
    if (Number(number) || number === '') {
      if (e.target.name === 'formPass') {
        setPass(number)
      } else {
        setPhone(number)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(
      name.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      pass.length === 0
    ) {
      toast.error('Debes llenar los campos', {
        toastId: 'error2',
        position: 'bottom-left',
        transition: Bounce,
      })
      return
    }

    const credentials = {
      name,
      last_name: lastName,
      doctor_dni: pass,
      phone,
      email,
      //specialty,
      //clinic,
      role: 'doctor'
    }

    dispatch(register(credentials))
  }

  return (
    <div className="form-wrapper">
      <div className='form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formName">Nombre *</label>
            <input
              className="form-input"
              type="text"
              name="formName"
              id="formName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formLastName">Apellido/s *</label>
            <input
              className="form-input"
              type="text"
              name="formLastName"
              id="formLastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label className="input-label" htmlFor="formClinic">Clínica *</label>
            <select 
              required 
              className='form-select' 
              name='formClinic' 
              id='formClinic'
              value={clinic}
              onChange={e => setClinic(e.target.value)}
            >
              <option disabled selected value="">Selecciona una opción</option>
            </select>
          </div>
          <div className='input-wrapper'>
            <label className="input-label" htmlFor="formSpecialty">Especialidad *</label>
            <select 
              required 
              className='form-select' 
              name='formSpecialty' 
              id='formSpecialty'
              value={specialty}
              onChange={e => setSpecialty(e.target.value)}
            >
              <option disabled selected value="">Selecciona una opción</option>
              <option value='oculista'>Oculista</option>
              <option value='dentista'>Dentista</option>
              <option value='traumatologo'>Traumatólogo</option>
              <option value='cardiologo'>Cardiólogo</option>
              <option value='ginecologo'>Ginecólogo</option>
              <option value='pediatra'>Pediatra</option>
              <option value='nutricionista'>Nutricionista</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formEmail">Email *</label>
            <input
              className="form-input"
              type="email"
              name="formEmail"
              id="formEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formPhone">Celular *</label>
            <input
              className="form-input"
              type='tel'
              name="formPhone"
              id="formPhone"
              value={phone}
              onChange={(e) => handleNumberChange(e)}
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formPass">DNI *</label>
            <input
              className="form-input"
              type="text"
              name="formPass"
              id="formPass"
              value={pass}
              onChange={(e) => handleNumberChange(e)}
            />
          </div>
          <button 
            className={`register-button ${signup.loading ? 'register-loading' : ''}`} 
            type='submit'
            disabled={signup.loading}
          >
            {signup.loading ? 'Registrando...' : 'Registrarme'}
            {signup.loading && <div className='spinner' />}
          </button>
        </form>
      </div>
    </div>
  )
}

export default DoctorRegisterForm

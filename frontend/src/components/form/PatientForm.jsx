import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, toast } from 'react-toastify'
import { register } from '../../redux/thunks/authThunk'
import { useNavigate } from 'react-router-dom'
import './registerForm.css'

const PatientRegisterForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signup = useSelector(state => state.auth)

  useEffect(() => {
    console.log(signup.user)
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
      } else if (e.target.name === 'formPhone') {
        setPhone(number)
      } else if (number <= 120) {
        setAge(number)
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
      pass.length === 0 ||
      gender.length === 0
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
      patient_dni: pass,
      age: parseInt(age, 10),
      gender,
      phone,
      email,
      role: 'patient'
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
            <label className="input-label" htmlFor="formGender">Género *</label>
            <select 
              required 
              className='form-select' 
              name='formGender' 
              id='formGender'
              defaultValue=''
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <option disabled value="">Selecciona una opción</option>
              <option value='Masculino'>Masculino</option>
              <option value='Femenino'>Femenino</option>
              <option value='Otro'>Otro</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formAge">Edad *</label>
            <input
              className="form-input"
              type='text'
              name="formAge"
              id="formAge"
              max="120"
              min="0"
              value={age}
              onChange={(e) => handleNumberChange(e)}
            />
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

export default PatientRegisterForm

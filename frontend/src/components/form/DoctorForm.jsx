import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bounce, toast } from 'react-toastify'
import { register } from '../../redux/thunks/authThunk'
import { useNavigate } from 'react-router-dom'
import './registerForm.css'
import { getAllClinics, getAllSpecialties } from '../../redux/thunks/doctorThunk'


const DoctorRegisterForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clinic, setClinic] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [gender, setGender] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signup = useSelector(state => state.auth)
  const doctor = useSelector(state => state.doctor)


  useEffect(() => {
    dispatch(getAllClinics())
    dispatch(getAllSpecialties())
  }, [dispatch])

  useEffect(() => {
    if (signup.user) {
      navigate('/clinic')
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
    if (
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
      doctor_dni: pass,
      gender,
      phone,
      email,
      specialty_id: specialty,
      clinic_id: clinic,
      role: 'doctor'
    }

    dispatch(register(credentials))
  }

  return (
    <div className="form-wrapper">
      <div className='form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='form-row'>
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
          </div>
          <div className='form-row'>
            <div className='input-wrapper'>
              <label className="input-label" htmlFor="formClinic">Clínica *</label>
              {doctor.loading ? <div className='spinner' /> :
                <select
                  required
                  className='form-select'
                  name='formClinic'
                  id='formClinic'
                  defaultValue=""
                  value={clinic}
                  onChange={e => setClinic(e.target.value)}
                  disabled={doctor.loading}
                >
                  <option disabled value="">Selecciona una opción</option>
                  {doctor.clinics.map(clinic => (
                    <option key={clinic.id} value={clinic.id}>{clinic.name_clinic}</option>
                  ))}
                </select>
              }
            </div>
            <div className='input-wrapper'>
              <label className="input-label" htmlFor="formSpecialty">Especialidad *</label>
              {doctor.loading ? <div className='spinner' /> :
                <select
                  required
                  className='form-select'
                  name='formSpecialty'
                  id='formSpecialty'
                  defaultValue=""
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value)}
                  disabled={doctor.loading}
                >
                  <option disabled value="">Selecciona una opción</option>
                  {doctor.specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                  ))}
                </select>
              }
            </div>
          </div>
          <div className='form-row'>
            <div className='input-wrapper'>
              <label className="input-label" htmlFor="formGender">Género *</label>
              <select
                required
                className='form-select'
                name='formGender'
                id='formGender'
                defaultValue=""
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
          </div>
          <div className='form-row'>
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

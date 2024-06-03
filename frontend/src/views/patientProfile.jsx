/* eslint-disable react-hooks/exhaustive-deps */
import './patientProfile.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { cargarFake, updateUser } from '../redux/actions/user'

const PatientProfile = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    email: '',
    address: '',
    phone: ''
  }
  const [profile, setProfile] = useState(initialState)
  useEffect(() => {
    if(!user || (Object.keys(user).length === 0)) {
      dispatch(cargarFake('patient'))
    }
  }, [])
  useEffect(()=>{
    if (user && Object.keys(user).length > 0) {
      setProfile(user)
    }
  }, [user])

  const handleChange = ev => {
    ev.preventDefault()
    const aux = {...user}
    aux[ev.target.name] = ev.target.value

    setProfile(aux)
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(updateUser(user))
  }

  return (
    <div className="patient-profile-container">
      <Helmet>
        <title>PatientProfile - AgendaSalud</title>
        <meta property="og:title" content="PatientProfile - AgendaSalud" />
      </Helmet>
      <div className="patient-profile-patient">
        <div className="patient-profile-links-container">
          <Link to='/patient'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="patient-profile-back-arrow"
            />
          </Link>
          <span className="patient-profile-text">
            Mis datos
          </span>
        </div>
      </div>
      <form className="patient-profile-form" onSubmit={handleSubmit}>
        <div className="patient-profile-user07b">
          <img
            alt="patient profile avatar"
            src="/avatar.svg"
            className="patient-profile-pasted-image"
          />
        </div>
        <div className="patient-profile-formgroup1">
          <label htmlFor='name' className="patient-profile-text04">
            Nombre y apellido
          </label>
          <input
            name='name' type="text" id='name'
            className="patient-profile-rectangle5361"
            onChange={handleChange}
            value={profile.name ? profile.name : ''}
          />
        </div>
        <div className="patient-profile-formgroup">
          <label htmlFor='address' className="patient-profile-text02">
            Address
          </label>
          <input
            name='address' type="text" id='address'
            className="patient-profile-rectangle536"
            onChange={handleChange}
            value={profile.address ? profile.address : ''}
          />
        </div>
        <div className="patient-profile-formgroup2">
          <label htmlFor='email' className="patient-profile-text06">
            Email
          </label>
          <input
            name='email' type="text" id='email'
            className="patient-profile-rectangle5362"
            onChange={handleChange}
            value={profile.email ? profile.email : ''}
          />
        </div>
        <div className="patient-profile-formgroup3">
          <label htmlFor='phone' className="patient-profile-text08">
            Celular
          </label>
          <input
            name='phone' type="text" id='phone'
            className="patient-profile-rectangle5363"
            onChange={handleChange}
            value={profile.phone ? profile.phone : ''}
          />
        </div>
        <button type='submit' className="patient-profile-frame6">
          Guardar
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default PatientProfile

/* eslint-disable react-hooks/exhaustive-deps */
import './clinicProfile.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { cargarFake, updateUser } from '../redux/actions/user'

const ClinicProfile = () => {
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
      dispatch(cargarFake('clinic'))
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
    <div className="clinic-profile-container">
      <Helmet>
        <title>Clinic Profile - AgendaSalud</title>
        <meta property="og:title" content="Clinic Profile - AgendaSalud" />
      </Helmet>
      <div className="clinic-profile-clinic">
        <div className="clinic-profile-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="clinic-profile-back-arrow"
            />
          </Link>
          <span className="clinic-profile-text">
            Mis datos
          </span>
        </div>
      </div>
      <form className="clinic-profile-form" onSubmit={handleSubmit}>
        <div className="clinic-profile-user07b">
          <img
            alt="clinic profile avatar"
            src="/avatar.svg"
            className="clinic-profile-photo"
          />
        </div>
        <div className="clinic-profile-formgroup1">
          <label htmlFor='name' className="clinic-profile-text04">
            Nombre y apellido
          </label>
          <input
            name='name' type="text" id='name'
            className="clinic-profile-rectangle5361"
            onChange={handleChange}
            value={profile.name ? profile.name : ''}
          />
        </div>
        <div className="clinic-profile-formgroup">
          <label htmlFor='address' className="clinic-profile-text02">
            Address
          </label>
          <input
            name='address' type="text" id='address'
            className="clinic-profile-rectangle536"
            onChange={handleChange}
            value={profile.address ? profile.address : ''}
          />
        </div>
        <div className="clinic-profile-formgroup2">
          <label htmlFor='email' className="clinic-profile-text06">
            Email
          </label>
          <input
            name='email' type="text" id='email'
            className="clinic-profile-rectangle5362"
            onChange={handleChange}
            value={profile.email ? profile.email : ''}
          />
        </div>
        <div className="clinic-profile-formgroup3">
          <label htmlFor='phone' className="clinic-profile-text08">
            Celular
          </label>
          <input
            name='phone' type="text" id='phone'
            className="clinic-profile-rectangle5363"
            onChange={handleChange}
            value={profile.phone ? profile.phone : ''}
          />
        </div>
        <button type='submit' className="clinic-profile-frame6">
          Guardar
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default ClinicProfile

import './clinicProfileMain.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cargarFake, updateUser } from '../../redux/actions/user'

export default function ClinicProfileMain() {
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
    <form className="clinic-profile-form" onSubmit={handleSubmit}>
      <div className="clinic-profile-user">
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
          className="clinic-profile-input1"
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
          className="clinic-profile-input"
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
          className="clinic-profile-input2"
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
          className="clinic-profile-input3"
          onChange={handleChange}
          value={profile.phone ? profile.phone : ''}
        />
      </div>
      <button type='submit' className="clinic-profile-submit">
        Guardar
      </button>
    </form>
  )
}

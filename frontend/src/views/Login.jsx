/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { login } from '../redux/thunks/authThunk';
import { Bounce, toast } from 'react-toastify';
import './login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', phone: '' })
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.user) {
      if(auth.user.role === 'DOCTOR') {
        navigate('/clinic')
      }
      else navigate(`/${auth.user.role}`)
    } else if (auth?.error) {
      toast.error(auth.error, {
        toastId: 'error1',
        position: 'bottom-left',
        transition: Bounce,
      })
    }
  }, [auth.user, auth.error])

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(credentials.email.length === 0 || credentials.phone.length === 0) {
      toast.error('Debes llenar los campos', {
        toastId: 'error2',
        position: 'bottom-left',
        transition: Bounce,
      })
      return
    }
    
    dispatch(login(credentials))
  };

  return (
    <section className='login'>
      <div className='form-wrapper'>
        <div>
          <Link to="/" className='return-link'>
            <button className='return-button'>&lt;- Volver</button>
          </Link>
          <h3 className='form-header'>Agenda Salud</h3>
          <p>Inicia Sesion</p>
          <form onSubmit={handleSubmit}>
            <div className='login-wrapper'>
              <label className='login-label' htmlFor='loginEmail'>Email</label>
              <input
                className='login-input'
                type='email'
                name='email'
                id='loginEmail'
                value={credentials.email}
                placeholder='Ingresá tu email'
                autoComplete='off'
                onChange={handleChange}
              />
            </div>
            <div className='login-wrapper'>
              <label className='login-label' htmlFor='loginPass'>Contraseña</label>
              <input
                className='login-input'
                type='password'
                name='phone'
                id='loginPass'
                value={credentials.phone}
                placeholder='Ingresá tu teléfono'
                onChange={handleChange}
              />
            </div>
            <button
              className={`login-button ${auth.loading ? 'login-loading' : ''}`}
              type='submit'
              disabled={auth.loading}
            >
              {auth.loading ? 'Ingresando...' : 'Ingresar'}
              {auth.loading && <div className='spinner' />}
            </button>
          </form>
          <div className='utilities-container'>
            <Link to="/recover-password" style={{ textDecoration: 'none' }}>
              <p className='utilities'>¿Olvidaste tu contraseña?</p>
            </Link>
            <p className='utilities-account'>
              ¿No tienes cuenta? <Link to="/create-account" style={{ textUnderlineOffset: '3px'}}>Creala aquí</Link>
            </p>
          </div>
        </div>
      </div>

      <div className='login-hero' />
    </section>
  )
}

export default Login

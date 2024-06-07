import { useEffect, useState } from 'react'
import './PassRecovery.css'
import { useDispatch, useSelector } from 'react-redux'
import { passRecovery } from '../redux/thunks/authThunk'
import { Bounce, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const PasswordRecovery = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const { loading, passReset, error } = useSelector(state => state.auth)

  useEffect(() => {
    if(passReset) {
      toast.success('Enviado! Verifica tu bandeja de correo electrónico', {
        toastId: 'success1',
        position: 'bottom-left',
        transition: Bounce,
      })
    } else if (error) {
      toast.error(error, {
        toastId: 'error1',
        position: 'bottom-left',
        transition: Bounce,
      })
    }
  }, [passReset, error])

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(email.length === 0) {
      toast.error('Debes ingresar tu email', {
        toastId: 'error2',
        position: 'bottom-left',
        transition: Bounce,
      })
      return
    }

    dispatch(passRecovery(email))
  }

  return (
    <section className='recovery'>
      <div className='form-wrapper'>
        <div>
          <Link to="/login" className='return-link'>
            <button className='return-button'>&lt;- Volver</button>
          </Link>
          <h3 className='form-header'>Agenda Salud</h3>
          <p>Olvidé mi contraseña</p>
          <p className='recovery-description'>
            Ingresá el mail asociado a tu cuenta y te enviaremos tu contraseña por mail
          </p>
          <form onSubmit={handleSubmit}>
            <div className='recovery-wrapper'>
              <label className='recovery-label' htmlFor='recoveryEmail'>Email</label>
              <input
                className='recovery-input'
                type='email'
                name='email'
                id='recoveryEmail'
                value={email}
                placeholder='Ingresá tu email'
                autoComplete='off'
                onChange={handleChange}
              />
            </div>
            <button
              className={`recovery-button ${loading ? 'recovery-loading' : ''}`}
              type='submit'
              disabled={loading}
            >
              {loading ? 'Reestableciendo...' : 'Reestablecer contraseña'}
              {loading && <div className='spinner' />}
            </button>
          </form>
        </div>
      </div>

      <div className='recovery-hero' />
    </section>
  )
}

export default PasswordRecovery

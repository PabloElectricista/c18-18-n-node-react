import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet'
import './contact.css'
import { toast } from 'react-toastify'
// import axios from 'axios'

const Contact = () => {
  const navigate = useNavigate();
  const initialState = {
    name: '', email: '', body: ''
  }
  const [message, setMessage] = useState(initialState)
  const [error, setError] = useState({ email: false, body: false })

  const handleChange = ev => {
    setMessage({
      ...message,
      [ev.target.name]: ev.target.value
    })
    setError({...error, email: false})
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target

    if (message.email.length === 0 || !form.checkValidity()) {
      setError({
        ...error,
        email: true
      })
      return
    }
    else {
      setError({
        ...error,
        email: false
      })
    }

    if (message.body.length === 0) {
      setError({
        ...error,
        body: true
      })
      return
    }
    else {
      setError({
        ...error,
        body: false
      })
    }

    try {
      // await axios.post('/mensaje', message)
      toast('mensaje enviado')
      setMessage(initialState)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - AgendaSalud</title>
        <meta property="og:title" content="Contact - AgendaSalud" />
      </Helmet>
      <div className="contact-header">
        <img
          alt="back arrow navigation"
          src="/back_arrow.svg"
          className="contact-backarrow"
          onClick={() => navigate(-1)}
        />
        <span className="contact-text">
          Agenda Salud
        </span>
      </div>
      <div className="contact-container1">
        <span className="contact-titulo">Contáctenos:</span>
        <div className="contact-personalizada">
          <span className="contact-titulo1">
            Para asistencia personalizada:
          </span>
          <div className="contact-container2">
            <span className="contact-email">
              <span className="contact-text4">
                E-mail:
              </span>
              <Link to={'mailto:info@agendasalud.com.ar'} className="contact-text5">info@agendasalud.com.ar</Link>
            </span>
            <span className="contact-phone">
              Teléfono: 0800 333 2112
            </span>
          </div>
        </div>
        <form className="contact-container3" onSubmit={handleSubmit}>
          <div className="contact-container4">
            <svg viewBox="0 0 731.4285714285713 1024" className="contact-icon">
              <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
            </svg>
            <input
              type="text"
              placeholder="Ingrese su nombre y apellido"
              className="contact-textinput input"
              name='name'
              value={message.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact-container5">
            <svg viewBox="0 0 1024 1024" className="contact-icon2">
              <path d="M512 640q52 0 90-38t38-90-38-90-90-38-90 38-38 90 38 90 90 38zM512 86q176 0 301 125t125 301v62q0 64-43 108t-105 44q-78 0-126-64-64 64-152 64t-151-63-63-151 63-151 151-63 151 63 63 151v62q0 26 19 46t45 20 45-20 19-46v-62q0-140-101-241t-241-101-241 101-101 241 101 241 241 101h214v84h-214q-176 0-301-125t-125-301 125-301 301-125z"></path>
            </svg>
            <input
              type="email"
              placeholder="Ingrese su dirección de email"
              className="contact-textinput1 input"
              name='email'
              value={message.email}
              onChange={handleChange}
            />
            {error.email ? <span className='contact-error'>Debe llenar correctamente este campo</span> : <span></span>}
          </div>
          <div className="contact-container6">
            <svg viewBox="0 0 1024 1024" className="contact-icon4">
              <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
            </svg>
            <textarea
              rows="4"
              placeholder="Detalle su consulta"
              className="contact-textarea input"
              name='body'
              value={message.body}
              onChange={handleChange}
            ></textarea>
            {error.body ? <span className='contact-error'>Deje su mensaje por favor</span> : <span></span>}
          </div>
          <button type="submit" className="contact-button">
            Enviar consulta
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

import './patientForm.css'

const PatientRegisterForm = () => {
  return (
    <div className="form-wrapper">
      <div className='form-container'>
        <p>Si no estás registrado, crea tu cuenta completando los siguientes datos:</p>
        <form className='register-form'>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formName">Nombre *</label>
            <input
              className="form-input"
              type="text"
              name="formName"
              id="formName"
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formSurname">Apellido/s *</label>
            <input
              className="form-input"
              type="text"
              name="formSurname"
              id="formSurname"
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formEmail">Email *</label>
            <input
              className="form-input"
              type="text"
              name="formEmail"
              id="formEmail"
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formPhone">Celular *</label>
            <input
              className="form-input"
              type="text"
              name="formPhone"
              id="formPhone"
            />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="formPass">DNI *</label>
            <input
              className="form-input"
              type="text"
              name="formPass"
              id="formPass"
            />
          </div>
          <button className='register-button' type='submit'>Registrarme</button>
        </form>
      </div>
    </div>
  )
}

export default PatientRegisterForm

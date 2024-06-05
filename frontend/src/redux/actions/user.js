import axios from 'axios'
import { signup, update, getScheludes } from '../slices/authSlices.js'

export const signupUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post('/signupruta', user)
    if (data && data.tkn) {
      localStorage.setItem('tkn', data.tkn)
      dispatch(signup(data))
    }
    else localStorage.setItem('tkn', 'tkn')
  } catch (error) {
    console.log(error);
  }
}

export const getUserScheludes = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/user/scheludes/${id}`, {
      Headers: {
        credentials: localStorage.getItem('tkn')
      }
    })
    dispatch(getScheludes(data))
  } catch (error) {
    console.log(error);
  }
}

const patient = {
  tkn: 'tkn1',
  id: 'patient',
  role: 'patient',
  name: 'usuario 1',
  email: 'usuario1@mail.com',
  address: 'street 1234',
  dni: '12345678',
  phone: '123456789'
}
const clinic = {
  tkn: 'tkn2',
  id: 'clinic',
  role: 'clinic',
  name: 'usuario 2',
  email: 'usuario2@mail.com',
  address: 'street 1234',
  dni: '23456789',
  phone: 123456789
}
export const cargarFake = (role) => (dispatch) => {
  if (role === 'patient') {
    localStorage.setItem('tkn', patient.tkn)
    dispatch(update(patient))
  }
  if (role === 'clinic'){ 
    localStorage.setItem('tkn', clinic.tkn)
    dispatch(update(clinic))
  }
}

export const updateUser = (user) => (dispatch) => {
  dispatch(update(user))
}

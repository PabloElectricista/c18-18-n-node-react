import axios from 'axios'
import { update, getScheludes } from '../slices/authSlices.js'

export const getUserScheludes = (id) => async (dispatch) => {
  try {
    const { data } = await axios(`/appointments`, {
      Headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY3MzZhNDk5NjdiNTIyNTdiMDc4YWQiLCJyb2xlIjoiUEFUSUVOVCIsImlhdCI6MTcxODA0MDIyOCwiZXhwIjoxNzIzMjI0MjI4fQ.s4XxAGKNmT4zdQY0tHg43RfzZPjDgVBKQrOu6wU3NSE'
      }
    })
    console.log(data.data);
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
  if (role === 'clinic') {
    localStorage.setItem('tkn', clinic.tkn)
    dispatch(update(clinic))
  }
}

export const updateUser = () => async (dispatch) => {
  try {
    const { data } = await axios('/doctor/666698b2f8f9b0e0fc0bcf3e')
    dispatch(update(data.data))
  } catch (error) {
    console.error(error);
  }
}

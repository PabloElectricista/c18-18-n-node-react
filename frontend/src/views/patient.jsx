/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom'
import './patient.css'
import { useEffect } from 'react'

const Patient = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const tkn = localStorage.getItem('tkn')
    if (!tkn) navigate('/auth')
  }, [])

  return <div>
    component Patient
  </div>
}

export default Patient

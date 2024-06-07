/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './Clinic.css'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Clinic = () => {
  const navigate = useNavigate()
  useEffect(() => {
    toast("hola!!!")
    const tkn = localStorage.getItem('tkn')
    if (!tkn) navigate('/auth')
  }, [])

  return <div>
    component Clinic
  </div>
}

export default Clinic

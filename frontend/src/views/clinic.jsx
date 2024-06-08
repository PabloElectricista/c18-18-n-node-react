/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

//

import './Clinic.css';


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

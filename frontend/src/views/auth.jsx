/* eslint-disable react-hooks/exhaustive-deps */
import './auth.css'
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
const Auth = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (user && user.role) {
      navigate(`/${user.role}`)
    }
  }, [user])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    dispatch(loginUser({}))
  }

  return <div>
    component Auth
    <button onClick={handleSubmit}>submit</button>
  </div>
}

export default Auth

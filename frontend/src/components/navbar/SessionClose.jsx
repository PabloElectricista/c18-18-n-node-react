/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlices';
import './sessionClose.css';

const SessionClose = ({ openClose }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClose = () => {
    openClose(false);
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className="session-close-container">
      <div className="session-close-container1">
        <button type="button" className="session-close-close">
          <img
            src="/close_icon.svg"
            alt="close_icon"
            className="session-close-icon"
          />
        </button>
        <span className="session-close-text">
          ¿Seguro desea cerrar sesión?
        </span>
        <div className="session-close-buttons">
          <button type="button" className="session-close-button1"
            onClick={handleClose}
          >
            <span className="session-close-text4"
            >
              Sí, cerrar
            </span>
          </button>
          <button type="button" className="session-close-button"
            onClick={() => openClose(false)}
          >
            <span className="session-close-text2">
              Continuar
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionClose

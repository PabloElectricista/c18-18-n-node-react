/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const Header = ({title}) => {
  const navigate = useNavigate()

  return (
    <div className="header-container">
        <div className="header-navlinks">
          <Link onClick={() => navigate(-1)}>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="header-navlinks-back-arrow"
            />
          </Link>
          <span className="patient-profile-text">
            {title}
          </span>
        </div>
      </div>
  )
}

export default Header

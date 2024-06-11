/* eslint-disable react-hooks/exhaustive-deps */
import './clinicProfile.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import ClinicProfileMain from '../components/clinicProfileMain/ClinicProfileMain'

const ClinicProfile = () => {
  
  return (
    <div className="clinic-profile-container">
      <Helmet>
        <title>Clinic Profile - AgendaSalud</title>
        <meta property="og:title" content="Clinic Profile - AgendaSalud" />
      </Helmet>
      <div className="clinic-profile-clinic">
        <div className="clinic-profile-links-container">
          <Link to='/clinic'>
            <img
              src="/back_arrow.svg"
              alt="back arrow navigation"
              className="clinic-profile-back-arrow"
            />
          </Link>
          <span className="clinic-profile-text">
            Mis datos
          </span>
        </div>
      </div>
      <ClinicProfileMain />
      <Footer />
    </div>
  )
}

export default ClinicProfile

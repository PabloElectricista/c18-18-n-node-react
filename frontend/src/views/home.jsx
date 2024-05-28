import './home.css'
import { Helmet } from 'react-helmet'

import Header from '../components/header/header'
import Main from '../components/main/main'
import Services from '../components/services/services'
import Footer from '../components/footer/footer'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AgendaSalud - Home</title>
        <meta property="og:title" content="AgendaSalud - Home" />
      </Helmet>
      <Header />
      <div className='home-background'>
        <Main />
        <Services />
      </div>
      <Footer />
    </div>
  )
}

export default Home

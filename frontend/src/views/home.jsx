import './home.css'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar'
import Main from "../components/main/main"

const Home = () => {
    return (
        <div className='containerGral'>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Home
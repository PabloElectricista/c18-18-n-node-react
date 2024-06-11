import Navbar from '../components/navbar/Navbar';
import Main from "../components/main/Main";
import Footer from '../components/footer/Footer';

import './home.css';

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

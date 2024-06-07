import Navbar from '../components/navbar/Navbar';
import Main from "../components/main/main";
import Footer from '../components/footer/footer';

import './Home.css';
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
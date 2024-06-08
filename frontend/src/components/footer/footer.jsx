//footer siguiendo la linea de la navbar en cuanto a colores y estilo
import LogosFooter from "./LogosFooter"
import logo from "../../assets/logonew.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footerGral'>
            <img src={logo} alt='logoOrganizacion' className='logo' />
            <LogosFooter />
            <div className='divHoraFooter'>
                <p className='pFooter'>© All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
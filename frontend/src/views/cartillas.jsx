import React from 'react'

import Footer from '../components/footer/Footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"

const Cartillas = () => {
    return (
        <div className='containerCartilla'>
            <NavbarCliente />
            <div className='cartillasInt'>
                <img src={foto} alt='foto' className='imgCartilla' />
                <div>
                    <div>desplegable1</div>
                    <div>desplegable2</div>
                    <div>desplegable3</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cartillas
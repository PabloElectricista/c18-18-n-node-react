import Footer from '../components/footer/footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import SwitchButton from '../components/buttons/SwitchButton'
import OpcionesCartilla from '../components/cartilla/OpcionesCartilla'
import dataCartilla from "./caritillaData.json"
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla'
import { useState } from 'react'

const Cartillas = () => {

    const [objetoInfoBuscar, setObjetoInfoBuscar] = useState({})

    return (
        <>
            <div className='containerCartilla'>
                <NavbarCliente className="nav" />
                <div className='cartillasInt'>
                    <h1 className='tituloCartilla'>CARTILLA ONLINE</h1>
                    <img src={foto} alt='foto' className='imgCartilla' />
                    <div className='divSwitch'>
                        <SwitchButton />
                    </div>
                    <div className='desplegables'>
                        {
                            dataCartilla.map((p) => {
                                return (<OpcionesCartilla 
                                    key={p.id}
                                    id={p.id}
                                    title={p.title}
                                    objetoInfoBuscar={objetoInfoBuscar}
                                    setObjetoInfoBuscar={setObjetoInfoBuscar}
                                    dataDesplegable={p.desplegable.map((b)=>{
                                        return b
                                    })}
                                />)
                            })
                        }
                    </div>
                </div>
                <ButtonBuscarCartilla info={objetoInfoBuscar} />
                <Footer />
            </div>
        </>
    )
}

export default Cartillas
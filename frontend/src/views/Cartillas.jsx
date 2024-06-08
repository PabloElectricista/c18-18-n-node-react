import Footer from '../components/footer/Footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import OpcionesCartilla from '../components/cartilla/OpcionesCartilla'
import dataCartilla from "./cartillaData.json"
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla'
import { useState } from 'react'
import OpcionElegida from "../components/cartilla/OpcionElegida"
import MenuFechaHora from '../components/cartilla/MenuFechaHora'
import Calendar from '../components/calendar/Calendar'

const Cartillas = () => {




    const [objetoInfoBuscar, setObjetoInfoBuscar] = useState({})

    //aca van a quedar guardadas las opciones que el usuario elija
    const [localidadSelected, setLocalidadSelected] = useState(null)
    const [clinica, setclinica] = useState(null)
    const [especialidad, setespecialidad] = useState(null)
    const [profesional, setProfesional] = useState(null)

    return (
        <>
            <div className='containerCartilla'>
                <NavbarCliente className="nav" />
                <div className='cartillasInt'>
                    <h1 className='tituloCartilla animated fadeInDown'>CARTILLA ONLINE</h1>
                    <img src={foto} alt='foto' className='imgCartilla' />
                    <div className='containerDesplegables'>
                        <div className='desplegables'>
                            {
                                dataCartilla.map((p) => {
                                    return (<OpcionesCartilla
                                        key={p.id}
                                        id={p.id}
                                        title={p.title}
                                        objetoInfoBuscar={objetoInfoBuscar}
                                        setObjetoInfoBuscar={setObjetoInfoBuscar}
                                        localidadSelected={localidadSelected}
                                        setLocalidadSelected={setLocalidadSelected}
                                        clinica={clinica}
                                        setclinica={setclinica}
                                        especialidad={especialidad}
                                        setespecialidad={setespecialidad}
                                        profesional={profesional}
                                        setProfesional={setProfesional}
                                        dataDesplegable={p.desplegable.map((b) => {
                                            return b
                                        })}
                                    />)
                                })
                            }
                        </div>
                        <div className='containerFechaHora'>
                            <MenuFechaHora />
                        </div>
                    </div>
                </div>
                <div className='divButtonBuscar'>
                    <ButtonBuscarCartilla info={objetoInfoBuscar} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Cartillas

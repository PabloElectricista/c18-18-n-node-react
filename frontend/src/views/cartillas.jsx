import { useState } from 'react';

//
import Footer from '../components/footer/Footer';
import foto from "../assets/cartilla/foto.png";
import NavbarCliente from '../components/navbar/NavbarCliente';
import OpcionesCartilla from '../components/cartilla/OpcionesCartilla';
import dataCartilla from "./caritillaData.json";
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla';
import OpcionElegida from "../components/cartilla/OpcionElegida";
import MenuFechaHora from '../components/cartilla/MenuFechaHora';

import "./Cartillas.css";

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
                        <div className='opcionesElegidas'>
                            {
                                localidadSelected ? (<OpcionElegida opcion={localidadSelected} anularOpcion={setLocalidadSelected} textOpcion="Localidad elegida" />) : null
                            }
                            {
                                clinica ? (<OpcionElegida opcion={clinica} anularOpcion={setclinica} textOpcion="Clinica elegida" />) : null
                            }
                            {
                                especialidad ? (<OpcionElegida opcion={especialidad} anularOpcion={setespecialidad} textOpcion="Especialidad elegida" />) : null
                            }
                            {
                                profesional ? (<OpcionElegida opcion={profesional} anularOpcion={setProfesional} textOpcion="Profesional elegido" />) : null
                            }
                        </div>
                        <div>
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
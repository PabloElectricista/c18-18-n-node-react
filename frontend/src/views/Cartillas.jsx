import Footer from '../components/footer/Footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import OpcionesCartilla from '../components/cartilla/OpcionesCartilla'
import dataCartilla from "./cartillaData.json"
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla'
import { useEffect, useState } from 'react'
import MenuFechaHora from '../components/cartilla/MenuFechaHora'
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics, getAllSpecialties, getAllDoctors ,getDoctorById, getSpecialtyById } from '../redux/thunks/doctorThunk'
import { getAllSchedulers, getSchedulerById } from '../redux/thunks/schedulerThunk'
import MenuDesplagableNew from '../components/cartilla/MenuDesplagableNew'
import OpcionElegida from '../components/cartilla/OpcionElegida'

const Cartillas = () => {

    //pruebas redux
    const dispatch = useDispatch()
    const dataSchedulers = useSelector(state => state.scheduler.schedulers)
    const dataClinics = useSelector(state => state.doctor.clinics)
    const dataSpecialties = useSelector(state => state.doctor.specialties)
    const dataDoctor = useSelector(state => state.doctor.doctors)
    const loading = useSelector(state => state.doctor.loading);
    const error = useSelector(state => state.doctor.error);
    const doctorById = useSelector(state => state.doctor.doctor)
    const specialtyById = useSelector(state => state.doctor.specialty)
    const idBusqueda = "666698b2f8f9b0e0fc0bcf3e"
    const idSpecialty = "66638e67bc1ad3436bd4e82a"

    useEffect(() => {
        dispatch(getAllClinics())
        dispatch(getAllSpecialties())
        dispatch(getAllDoctors())
        dispatch(getAllSchedulers())
        dispatch(getDoctorById(idBusqueda))
        dispatch(getSpecialtyById())
    }, [dispatch])

    const [objetoInfoBuscar, setObjetoInfoBuscar] = useState({})

    //aca van a quedar guardadas las opciones que el usuario elija
    const [localidadSelected, setLocalidadSelected] = useState(null)
    const [clinica, setclinica] = useState(null)
    const [especialidad, setespecialidad] = useState(null)
    const [profesional, setProfesional] = useState(null)

    const [openDesplegable, setOpenDesplegable] = useState(null)

    return (
        <>
            <div className='containerCartilla'>
                <NavbarCliente className="nav" />
                <div className='cartillasInt'>
                    <h1 className='tituloCartilla animated fadeInDown'>CARTILLA ONLINE</h1>
                    <img src={foto} alt='foto' className='imgCartilla' />
                    <div className='containerDesplegables'>
                        {/* <div className='desplegables'>
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
                        </div> */}
                        <div className='desplegables'>
                            <div>
                                <h2 className='title'>¿Qué estás buscando?</h2>
                                <MenuDesplagableNew data={dataClinics} titleButton="Clinica" dataOpcion="name_clinic" saveData={setclinica} openDes={openDesplegable} openDesFunc={setOpenDesplegable} />
                                {/* <OpcionElegida textOpcion="Clinica elegida" opcion={clinica} anularOpcion={setclinica} /> */}
                                <MenuDesplagableNew data={dataSpecialties} titleButton="Especialidad" dataOpcion="name" saveData={setespecialidad} openDes={openDesplegable} openDesFunc={setOpenDesplegable} />
                                <MenuDesplagableNew data={dataDoctor} titleButton="Profesional" dataOpcion="last_name" dataOpcion2="name" saveData={setProfesional} openDes={openDesplegable} openDesFunc={setOpenDesplegable} />
                            </div>
                        </div>
                        <div className='containerFechaHora'>
                            <MenuFechaHora dataSchedulers={dataSchedulers} />
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

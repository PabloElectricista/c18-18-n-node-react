import Footer from '../components/footer/Footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla'
import { useEffect, useState } from 'react'
import MenuFechaHora from '../components/cartilla/MenuFechaHora'
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics, getAllSpecialties, getAllDoctors, getDoctorById, getSpecialtyById, getClinicById } from '../redux/thunks/doctorThunk'
import { getAllSchedulers } from '../redux/thunks/schedulerThunk'
import MenuDesplagableNew from '../components/cartilla/MenuDesplagableNew'

import PdfRenderer from "../components/pdfRenderer/PdfRenderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Cartillas = () => {

    //pruebas redux
    const dispatch = useDispatch()
    const dataSchedulers = useSelector(state => state.scheduler.schedulers)
    const dataClinics = useSelector(state => state.doctor.clinics)
    const dataSpecialties = useSelector(state => state.doctor.specialties)
    const dataDoctor = useSelector(state => state.doctor.doctors)
    const loading = useSelector(state => state.doctor.loading);
    const error = useSelector(state => state.doctor.error);
    const clinicById = useSelector(state => state.doctor.clinic)
    const appointments = useSelector(state => state.appointments)
    const patient = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAllClinics())
        dispatch(getAllSpecialties())
        dispatch(getAllDoctors())
        dispatch(getAllSchedulers())
    }, [dispatch])

    const [objetoInfoBuscar, setObjetoInfoBuscar] = useState({})

    //aca van a quedar guardadas las opciones que el usuario elija por id
    const [localidadSelected, setLocalidadSelected] = useState(null)
    const [clinica, setclinica] = useState(null)
    const [especialidad, setespecialidad] = useState(null)
    const [profesional, setProfesional] = useState(null)
    const [fechaElegida, setFechaElegida] = useState(null)
    const [horaElegida, setHoraElegida] = useState(null)
    const [scheduler, setScheduler] = useState(null)

    //estos son estados para renderizar el componente opcion elegida
    const [nameClinic, setNameClinic] = useState(null)
    const [nameSpecialty, setNameSpecialty] = useState(null)
    const [nameProfesional, setNameProfesional] = useState(null)
    const [lastnameProfesional, setLastnameProfesional] = useState(null)


    //filtros

    let dataDoctorFiltered = dataDoctor.filter((d) => { return d.clinic_id === clinica })
    let dataSpecialtyFiltered = dataSpecialties.filter(specialty =>
        dataDoctorFiltered.some(doctor => doctor.specialty_id === specialty.id)
    );


    useEffect(() => {
        if (clinica === undefined) {
            setProfesional(null)
            setespecialidad(null)
        }

        if (clinica) {
            dispatch(getClinicById(clinica))
        }
    }, [dispatch, clinica])

    useEffect(() => {
        if (especialidad === undefined) {
            setProfesional(null)
        }
    }, [especialidad])

    return (
        <>
            <div className='containerCartilla'>
                <NavbarCliente className="nav" />
                <div className='cartillasInt'>
                    <h1 className='tituloCartilla animated fadeInDown'>CARTILLA ONLINE</h1>
                    <img src={foto} alt='foto' className='imgCartilla' />
                    <div className='containerDesplegables'>
                        <div className='desplegables'>
                            <div>
                                {/* aqui se renderiza cada componente desplegable llevando y trayendo la data y variables necesarias */}
                                <h2 className='title'>¿Qué estás buscando?</h2>
                                <MenuDesplagableNew
                                    data={dataClinics}
                                    titleButton="Clinica"
                                    dataOpcion="name_clinic"
                                    dataElegida={clinica}
                                    saveData={setclinica}
                                    mostrarOpcion={nameClinic}
                                    setNameClinic={setNameClinic} />
                                <MenuDesplagableNew
                                    data={dataSpecialtyFiltered}
                                    titleButton="Especialidad"
                                    dataOpcion="name"
                                    dataElegida={especialidad}
                                    infoClinica={clinica}
                                    saveData={setespecialidad}
                                    mostrarOpcion={nameSpecialty}
                                    setNameSpecialty={setNameSpecialty} />
                                <MenuDesplagableNew
                                    data={dataDoctorFiltered}
                                    titleButton="Profesional"
                                    dataOpcion="last_name"
                                    dataElegida={profesional}
                                    dataOpcion2="name"
                                    saveData={setProfesional}
                                    setNameProfesional={setNameProfesional}
                                    mostrarOpcion={nameProfesional} />
                            </div>
                        </div>
                        <div className='containerFechaHora'>
                            {/* componente para la fecha y la hora */}
                            <MenuFechaHora dataSchedulers={dataSchedulers} setScheduler={setScheduler} horaElegida={horaElegida} profesional={profesional} setHoraElegida={setHoraElegida} setFechaElegida={setFechaElegida} />
                        </div>
                    </div>
                </div>
                <div className='divButtonBuscar'>
                    <ButtonBuscarCartilla info={objetoInfoBuscar} clinica={clinica} scheduler={scheduler} especialidad={especialidad} profesional={profesional} horaElegida={horaElegida} fechaElegida={fechaElegida} />
                </div>
                
                <Footer />
            </div>
        </>
    )
}

export default Cartillas

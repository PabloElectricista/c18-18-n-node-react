import Footer from '../components/footer/Footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import ButtonBuscarCartilla from '../components/buttons/ButtonBuscarCartilla'
import { useEffect, useState } from 'react'
import MenuFechaHora from '../components/cartilla/MenuFechaHora'
import { useDispatch, useSelector } from "react-redux";
import { getAllClinics, getAllSpecialties, getAllDoctors, getDoctorById, getSpecialtyById } from '../redux/thunks/doctorThunk'
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

    //aca van a quedar guardadas las opciones que el usuario elija por id
    const [localidadSelected, setLocalidadSelected] = useState(null)
    const [clinica, setclinica] = useState(null)
    const [especialidad, setespecialidad] = useState(null)
    const [profesional, setProfesional] = useState(null)
    const [fechaElegida, setFechaElegida] = useState(null)
    const [horaElegida, setHoraElegida] = useState(null)

    //estos son estados para renderizar el componente opcion elegida
    const [nameClinic, setNameClinic] = useState(null)
    const [nameSpecialty, setNameSpecialty] = useState(null)
    const [nameProfesional, setNameProfesional] = useState(null)
    const [lastnameProfesional, setLastnameProfesional] = useState(null)


    //filtros

    let dataDoctorFiltered = dataDoctor.filter((d) => { return d.clinic_id === clinica })
    const dataSpecialtyFiltered = dataSpecialties.filter(specialty =>
        dataDoctorFiltered.some(doctor => doctor.specialty_id === specialty.id)
    );

    //validaciones post filtros

    useEffect(() => {
        if (clinica === undefined) {
            setProfesional(null)
            setespecialidad(null)
        }
    }, [clinica])

    useEffect(() => {
        if (especialidad === undefined) {
            setProfesional(null)
        }
    }, [especialidad])

    //pdf

    const pacientePDF = {
        name: "Agustin",
        last_name: "Hahn",
        patient_dni: 1145602459
      };

    const medicoPDF = {
        name: nameProfesional,
        last_name: lastnameProfesional,
        specialty: nameSpecialty,
    };

    const clinicaPDF = {
        name_clinic: nameClinic,
        room_number: "C10",
    }

    const fechaDeLaCitaPDF = `${fechaElegida} ${horaElegida}`;

    const fecha = new Date().toLocaleDateString().replace(/\//g, '-');
    const fileName = `${pacientePDF.name}-${pacientePDF.last_name}_${fecha}.pdf`;

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
                            <MenuFechaHora dataSchedulers={dataSchedulers} horaElegida={horaElegida} profesional={profesional} setHoraElegida={setHoraElegida} setFechaElegida={setFechaElegida} />
                        </div>
                    </div>
                </div>
                <div className='divButtonBuscar'>
                    <ButtonBuscarCartilla info={objetoInfoBuscar} clinica={clinica} especialidad={especialidad} profesional={profesional} horaElegida={horaElegida} fechaElegida={fechaElegida} />
                    <PDFDownloadLink
                            document={<PdfRenderer
                                pacientePDF={pacientePDF}
                                medicoPDF={medicoPDF}
                                clinicaPDF={clinicaPDF}
                                fechaCitaPDF={fechaDeLaCitaPDF}
                            />}
                            fileName={fileName}
                        >
                            {({ loading }) => loading ?
                                <button>Cargando...</button> :
                                <button>Descargar</button>
                            }
                        </PDFDownloadLink>
                </div>
                
                <Footer />
            </div>
        </>
    )
}

export default Cartillas

import React, { useEffect, useState } from 'react';
import "./opcionescartilla.css"
import MenuDesplegable from './MenuDesplegable'
import OpcionElegida from './OpcionElegida';

const OpcionesCartilla = ({ title, dataDesplegable, id ,setObjetoInfoBuscar,objetoInfoBuscar}) => {

    //aca van a quedar guardadas las opciones que el usuario elija
    const [credencialSelected, useCredencialSelected] = useState(null)
    const [busquedaSelected, setBusquedaSelected] = useState(null)
    const [dondeAtenderSelected, setDondeAtenderSelected] = useState(null)

    //para mostrar que se captura correctamente cada opcion (podria asignarse un id para facilitar el recurso de dats)
    useEffect(() => {
        setObjetoInfoBuscar(prevState =>({
            ...prevState,
            credencialSelected
        }))
    }, [credencialSelected])

    useEffect(() => {
        setObjetoInfoBuscar(prevState =>({
            ...prevState,
            busquedaSelected
        }))
    }, [busquedaSelected])

    useEffect(() => {
        setObjetoInfoBuscar(prevState =>({
            ...prevState,
            dondeAtenderSelected
        }))
    }, [dondeAtenderSelected])


    return (
        <div className='opcionesCartillasContainer'>
            <h2 className='title'>{title}</h2>
            {
                credencialSelected ? (<OpcionElegida opcion={credencialSelected} anularOpcion={useCredencialSelected} />) : null
            }
            {
                busquedaSelected ? (<OpcionElegida opcion={busquedaSelected} anularOpcion={setBusquedaSelected} />) : null
            }
            {
                dondeAtenderSelected ? (<OpcionElegida opcion={dondeAtenderSelected} anularOpcion={setDondeAtenderSelected} />) : null
            }
            <MenuDesplegable
                dataDesplegable={dataDesplegable}
                idOpcion={id}
                useCredencialSelected={useCredencialSelected}
                setBusquedaSelected={setBusquedaSelected}
                setDondeAtenderSelected={setDondeAtenderSelected}
            />
        </div>
    )
}

export default OpcionesCartilla
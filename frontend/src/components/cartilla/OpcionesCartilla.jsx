/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MenuDesplegable from './MenuDesplegable'
import "./opcionescartilla.css"

const OpcionesCartilla = ({ title, dataDesplegable, id, localidadSelected,setLocalidadSelected,profesional, setProfesional,clinica,especialidad, setespecialidad, setclinica,setObjetoInfoBuscar, objetoInfoBuscar }) => {

    //para mostrar que se captura correctamente cada opcion (podria asignarse un id para facilitar el recurso de dats)
    useEffect(() => {
        setObjetoInfoBuscar(prevState => ({
            ...prevState,
            localidadSelected
        }))
    }, [localidadSelected])

    useEffect(() => {
        setObjetoInfoBuscar(prevState => ({
            ...prevState,
            clinica
        }))
    }, [clinica])

    useEffect(() => {
        setObjetoInfoBuscar(prevState => ({
            ...prevState,
            especialidad
        }))
    }, [especialidad])

    return (
        <div className='opcionesCartillasContainer'>
            <div className='contenedoropcionesdesplegables'>
                <MenuDesplegable
                    dataDesplegable={dataDesplegable}
                    idOpcion={id}
                    setLocalidadSelected={setLocalidadSelected}
                    setclinica={setclinica}
                    setespecialidad={setespecialidad}
                    setProfesional={setProfesional}
                    especialidad={especialidad}
                    profesional={profesional}
                    localidadSelected={localidadSelected}
                    clinica={clinica}
                />
            </div>
        </div>
    )
}

export default OpcionesCartilla
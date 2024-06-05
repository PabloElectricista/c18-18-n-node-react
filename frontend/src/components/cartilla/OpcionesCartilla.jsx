import React, { useEffect, useState } from 'react';
import "./opcionescartilla.css"
import MenuDesplegable from './MenuDesplegable'


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
            <h2 className='title'>{title}</h2>
            <div className='contenedoropcionesdesplegables'>
                <MenuDesplegable
                    dataDesplegable={dataDesplegable}
                    idOpcion={id}
                    setLocalidadSelected={setLocalidadSelected}
                    setclinica={setclinica}
                    setespecialidad={setespecialidad}
                    setProfesional={setProfesional}
                />
            </div>
        </div>
    )
}

export default OpcionesCartilla
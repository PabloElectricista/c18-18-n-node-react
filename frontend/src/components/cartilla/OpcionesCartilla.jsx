import React from 'react'
import "./opcionescartilla.css"
import MenuDesplegable from './MenuDesplegable'

const OpcionesCartilla = ({title, dataDesplegable}) => {
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <MenuDesplegable dataDesplegable={dataDesplegable} />
        </div>
    )
}

export default OpcionesCartilla
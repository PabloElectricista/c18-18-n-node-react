import React from 'react';
import img3 from "../../../assets/main/img3.png";
import img4 from "../../../assets/main/img4.png";
import "./Services.css";

const Services = () => {
  return (
    <div className='containerServices'>
      <div className='bloqueServices'>
        <div className='bloqueservicesInt'>
          <img className='imgMain' src={img3} alt='fotoservicio' />
          <span className='spanServices'>
            Conectarte con los mejores profesionales en todo momento, a toda hora desde la comodidad de tu hogar.
          </span>
        </div>
      </div>
      <div className='bloqueServices'>
        <div className='bloqueservicesInt'>
          <img className='imgMain' src={img4} alt='fotoservicio' />
          <span className='spanServices'>
            Ayudarte a gestionar tus turnos y los de tu familia de una forma más sencilla, sin filas ni demoras.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Services
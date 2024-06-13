import React, { useState, useEffect } from "react";
import img3 from "../../../assets/main/img3.png";
import img4 from "../../../assets/main/img4.png";
import "./services.css";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  const DesktopServices = (
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
  );


  const MobileServices = (
    <div className='containerServicesMobile'>
      <div className='bloqueServicesMobile'>
        <img className='imgMainMobile' src={img3} alt='fotoservicio' />
        <div className='bloqueservicesIntMobile'>
          <span className='spanServicesMobile'>
            Conectarte con los mejores profesionales en todo momento, a toda hora desde la comodidad de tu hogar.
          </span>
        </div>
      </div>
      <div className='bloqueServicesMobile'>
        <img className='imgMainMobile' src={img4} alt='fotoservicio' />
        <div className='bloqueservicesIntMobile'>
          <span className='spanServicesMobile'>
            Ayudarte a gestionar tus turnos y los de tu familia de una forma más sencilla, sin filas ni demoras.
          </span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // func para establecer el estado inicial
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // Contenido según pantalla
  return isMobile ? MobileServices : DesktopServices;
}

export default Services;

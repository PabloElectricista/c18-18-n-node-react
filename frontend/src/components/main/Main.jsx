import { useState, useEffect } from 'react';
import ButtonAccessPacienteProfesional from '../buttons/ButtonAccessPacienteProfesional';
import img2 from "../../assets/main/img2.png";
import Services from './services/Services';
import './main.css';

const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const DesktopMain = () => {
    return (
      <div className="container-main">
        <div className='subContainer-main'>
          <div className='bloqueAmain'>
            <div className='bloqueAtitulos'>
              <h1 className="tituloMain animated fadeInDown">
                Agenda Salud
              </h1>
              <h3 className="subTituloMain ">
                Facilitando tu acceso a la Salud
              </h3>
            </div>
            <div className='bloqueAIngreso'>
              <h4 className='subTituloBotones'>Ingresar aqui</h4>
              <div className='bloqueABotonesIng'>
                <ButtonAccessPacienteProfesional titleButton="Soy paciente" redireccionar="patient" />
                <ButtonAccessPacienteProfesional titleButton="Soy profesional" redireccionar="clinic" />
              </div>
            </div>
          </div>
          <div className='bloqueBmain'>
            <div className="bloqueBsubMain">
              <img src={img2} alt="img medico" className='imgMainPrincipal' />
              <span className="bloqueBtext">
                Nuestra misión es brindarte el mejor servicio para vos y tu familia
                facilitando tu acceso a la salud
              </span>
            </div>
          </div>
        </div>
        <Services />
      </div>
    );
  }



  const MobileMain = () => {
    return (
      <div className="container-main-mobile">
        <h1 className="tituloMainMobile animated fadeInDown">
          Agenda Salud
        </h1>
        <h3 className="subTituloMainMobile">
          Facilitando tu acceso a la Salud
        </h3>
        <img src={img2} alt="img medico" className='imgMainPrincipalMobile' />
        <span className="bloqueBtextMobile">
          Nuestra misión es brindarte el mejor servicio para vos y tu familia
          facilitando tu acceso a la salud
        </span>
        <div className='bloqueAIngresoMobile'>
          <h4 className='subTituloBotonesMobile'>Ingresar aquí</h4>
          <div className='bloqueABotonesIngMobile'>
            <ButtonAccessPacienteProfesional titleButton="Soy paciente" redireccionar="patient" />
            <ButtonAccessPacienteProfesional titleButton="Soy profesional" redireccionar="clinic" />
          </div>
        </div>
        <Services />
      </div>
    );
  }




  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileMain />
      ) : (
        <DesktopMain />
      )}
    </div>
  );
}



export default Main;

import ButtonAccessPacienteProfesional from '../buttons/ButtonAccessPacienteProfesional';
import img2 from "../../assets/main/img2.png";
import Services from './services/Services';

import './Main.css';

const Main = () => {
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
                            <ButtonAccessPacienteProfesional titleButton="Soy paciente" redireccionar="patient"  />
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
    )
}

export default Main
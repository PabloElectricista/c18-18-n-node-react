import Footer from '../components/footer/footer'
import foto from "../assets/cartilla/foto.png"
import NavbarCliente from '../components/navbar/NavbarCliente'
import "./cartillas.css"
import SwitchButton from '../components/buttons/SwitchButton'
import OpcionesCartilla from '../components/cartilla/OpcionesCartilla'
import dataCartilla from "./caritillaData.json"

const Cartillas = () => {
    return (
        <>
            <div className='containerCartilla'>
                <NavbarCliente />
                <div className='cartillasInt'>
                    <h1 className='tituloCartilla'>CARTILLA ONLINE</h1>
                    <img src={foto} alt='foto' className='imgCartilla' />
                    <div className='divSwitch'>
                        <SwitchButton />
                    </div>
                    <div className='desplegables'>
                        {
                            dataCartilla.map((p) => {
                                return (<OpcionesCartilla 
                                    key={p.id}
                                    title={p.title}
                                    dataDesplegable={p.desplegable.map((b)=>{
                                        return b
                                    })}
                                />)
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Cartillas
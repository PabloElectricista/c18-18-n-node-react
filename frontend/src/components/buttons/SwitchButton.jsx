import { useState } from 'react'
import './switchButton.css'


const SwitchButton = () => {

    //la logica esta preparada para que cuando ingrese se busque por localidad ya que checkon=false

    const [checkOn, setCheckOn] = useState(false)

    const presionarSwitch = () =>{
        const newCheck = !checkOn
        setCheckOn(newCheck);
        if(newCheck){
            console.log('Buscar por cercania')
        }
        else{
            console.log('Buscar por localidad')
        }
    }

    return (
        <div className="toggle-switch">
            <input className="toggle-input" id="toggle" type="checkbox" checked={checkOn} onChange={presionarSwitch} />
            <label className="toggle-label" htmlFor="toggle">
                <span className='text-on'>Buscar por localidad</span>
                <span className='text-off'>Buscar por cercanía</span>
            </label>
        </div>

    )
}

export default SwitchButton
import { useState } from 'react'
import PropTypes from 'prop-types'

import './SwitchButton.css'


const SwitchButton = ({ text1, text2, setIsDoctor, isDoctor }) => {

    //la logica esta preparada para que cuando ingrese se busque por localidad ya que checkon=false

    const [checkOn, setCheckOn] = useState(false)

    const presionarSwitch = () =>{
        const newCheck = !checkOn
        setIsDoctor(!isDoctor)
        setCheckOn(newCheck);
        if(newCheck){
            console.log(text2)
        }
        else{
            console.log(text1)
        }
    }

    return (
        <div className="toggle-switch">
            <input className="toggle-input" id="toggle" type="checkbox" checked={checkOn} onChange={presionarSwitch} />
            <label className="toggle-label" htmlFor="toggle">
                <span className='text-on'>{text1}</span>
                <span className='text-off'>{text2}</span>
            </label>
        </div>

    )
}

export default SwitchButton

SwitchButton.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    setIsDoctor: PropTypes.func,
    isDoctor: PropTypes.bool
}

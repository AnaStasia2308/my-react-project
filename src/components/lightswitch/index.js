import LightBulb from '../lightbulb';
import {useState} from 'react';
import './index.css'

function LightSwitch(){
    const [lightIsOn , setLightIsOn] = useState(false)
    function buttonClick(){
        setLightIsOn(!lightIsOn)   
    }
    return( 
        <div>
            <div>
                <LightBulb lightIsOn={lightIsOn} />
            </div>
            <div>
                <button className="buttonOn" onClick={buttonClick}>
                    Click
                </button>
            </div>
        </div>
    )
}

export default LightSwitch

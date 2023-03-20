import LightBulb from '../lightbulb';
import {useState} from 'react';
import './index.css'

function LightSwitch(props){
    const [lightIsOn , setLightIsOn] = useState(false)
    function buttonClick(){
        setLightIsOn(!lightIsOn)   
    }
    return( 
        <div>
            <LightBulb lightIsOn={lightIsOn} isMasterSwitchOn={props.isMasterSwitchOn}/>
			<p></p>
			<button className="buttonOn" onClick={buttonClick}>Click</button>
			<p></p>
        </div>
    )
}

export default LightSwitch
import LightBulb from '../lightbulb';
import {useState} from 'react';

function LightSwitch(){
	const [lightIsOn , setLightIsOn] = useState(true)
	function buttonClick(){
		setLightIsOn(!lightIsOn)   
	}
	return(
		<div>
  			<LightBulb lightIsOn={lightIsOn} isMasterSwitchOn={props.isMasterSwitchOn}/>
  			<p />
  			<button onClick={buttonClick}>On</button>
		</div>
	)
}

export default LightSwitch


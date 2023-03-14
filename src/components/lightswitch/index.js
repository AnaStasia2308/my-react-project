import LightBulb from '../lightbulb';
import {useState} from 'react';

function LightSwitch(){
	const [lightIsOn , setLightIsOn] = useState(true)
	function buttonClick(){
		setLightIsOn(!lightIsOn)   
	}
	return( 
		<>
  			<button onClick={buttonClick}>On</button>
  			<LightBulb lightIsOn={lightIsOn} />
		</>
	)
}

export default LightSwitch
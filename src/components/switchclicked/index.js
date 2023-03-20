import LightBulb from '../lightbulb';
import {useState} from 'react';

function MasterSwitchClicked(){
	const [isMasterSwitchOn , setMasterSwitchOn] = useState(true)
	function masterSwitchClicked(){
		setMasterSwitchOn(!isMasterSwitchOn)   
	}
	return(
		<div>
  			<LightBulb isMasterSwitchOn={isMasterSwitchOn} />
		</div>
	)
}

export default MasterSwitchClicked

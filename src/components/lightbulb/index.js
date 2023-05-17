import { useMasterControl } from '../../context/master-control'
import './index.css'

function LightBulb(props){
	const { isMasterSwitchOn } = useMasterControl()
	const lightIsOn= (isMasterSwitchOn || props.lightIsOn)
	const img1 = lightIsOn ? 'light_on.png' : 'light_off.jpg'
	const alt = lightIsOn ? 'light on' : 'light off'
	return( 
		<>
  			<img className="lightbulb" src={img1} alt={alt}/>
		</>
	)
}
export default LightBulb

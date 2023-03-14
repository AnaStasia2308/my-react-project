import './index.css'

function LihgtBulb(props){
	const img1 = (props.lightIsOn) ? 'light_on.png' : 'light_off.jpg'
	return( 
		<>
  			<img className="lightbulb" src={img1}/>
		</>
	)
	
}
export default LihgtBulb
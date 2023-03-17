import './index.css'

function MasterSwitch(props){
  function masterSwitchClicked(){
    props.setMasterSwitchOn(!props.isMasterSwitchOn)   
  }
  return(
    <div>
    <button className="masterSwitch" onClick={masterSwitchClicked}>Master Switch</button>
    </div>
  )
}

export default MasterSwitch

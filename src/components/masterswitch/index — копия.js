
function MasterSwitch(props){
  function masterSwitchClicked(){
    props.setMasterSwitchOn(!props.isMasterSwitchOn)   
  }
  return(
    <div>
    <button onClick={masterSwitchClicked}>Button</button>
    </div>
  )
}

export default MasterSwitch
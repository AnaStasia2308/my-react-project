import { useMasterControl } from '../../context/master-control'
import './index.css'

function MasterSwitch(){
  const { setIsMasterSwitchOn, isMasterSwitchOn } = useMasterControl()
  function masterSwitchClicked(){
    setIsMasterSwitchOn(!isMasterSwitchOn)   
  }
  return(
    <button className="masterSwitch" onClick={masterSwitchClicked}>
      Master Switch
    </button>
  )
}

export default MasterSwitch

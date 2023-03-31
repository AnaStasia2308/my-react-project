import { useState, createContext, useContext } from 'react'

const MasterControlContext = createContext()


function MasterControl (props) {
  const [ isMasterSwitchOn, setIsMasterSwitchOn ] = useState(false)
  const value = {
    isMasterSwitchOn,
    setIsMasterSwitchOn,
  }
  return (
    <MasterControlContext.Provider value={value}>
      { props.children }
    </MasterControlContext.Provider>
  )
}

export const useMasterControl = ()=>useContext(MasterControlContext)

export default MasterControl

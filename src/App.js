import LightSwitch from './components/lightswitch';
import MasterSwitch from './components/masterswitch';
import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [isMasterSwitchOn, setMasterSwitchOn] = useState(false)
  return (
    <div className="App">
      <div>
        <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
        <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
        <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
      </div>
      <MasterSwitch isMasterSwitchOn={isMasterSwitchOn} setMasterSwitchOn={setMasterSwitchOn} />
    </div>
  );
}

export default App;

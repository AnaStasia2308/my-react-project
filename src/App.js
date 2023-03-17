import LightSwitch from './components/lightswitch';
import MasterSwitch from './components/masterswitch';
import './App.css';
import { useState } from 'react';

function App() {
  const [isMasterSwitchOn, setMasterSwitchOn] = useState(false)
  return (
    <div className="App">
      <div>
      <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
      <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
      <LightSwitch isMasterSwitchOn={isMasterSwitchOn} />
    </div>
    <p></p>
    <MasterSwitch isMasterSwitchOn={isMasterSwitchOn} setMasterSwitchOn={setMasterSwitchOn} />
    </div>
  );
}

export default App;

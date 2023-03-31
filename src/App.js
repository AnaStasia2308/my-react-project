import LightSwitch from './components/lightswitch';
import MasterSwitch from './components/masterswitch';
import React from 'react';
import MasterControl from './context/master-control'
import './App.css';


function App() {
  return (
    <MasterControl>
      <div className="App">
        <div>
          <LightSwitch />
          <LightSwitch />
          <LightSwitch />
        </div>
        <MasterSwitch />
      </div>
    </MasterControl>
  );
}

export default App;

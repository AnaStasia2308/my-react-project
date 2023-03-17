import LightSwitch from './components/lightswitch';
import LightBulb from './components/lightbulb';
import React from 'react';
import {useState} from 'react';
import MasterSwitchClicked from './components/switchclicked';
import './App.css';

function App() {
  return (
    <div className="App">
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <p />
      <MasterSwitchClicked />
    </div>
    );
  }

  export default App;

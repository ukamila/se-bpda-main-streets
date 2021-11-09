import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage';
import {Map} from './components/Map';

function App() {
  return (
    <div className="App">
      <p> BPDA Main Streets</p>
      <Homepage />
      <Map />
    </div>
  );
}

export default App;

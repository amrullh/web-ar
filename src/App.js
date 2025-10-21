// Lokasi File: src/App.js

import React from 'react';
import ARScanner from './components/ARScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Merender komponen AR Scanner */}
      <ARScanner />
    </div>
  );
}

export default App;


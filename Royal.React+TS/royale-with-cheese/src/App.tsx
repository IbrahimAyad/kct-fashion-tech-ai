import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OutageNotification from './components/OutageNotification';
import './App.css';

function App() {
  return (
    <div className="App">
      <OutageNotification />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Slider from './components/Slider/Slider';
import WeekBoard from './components/WeekBoard/WeekBoard';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <WeekBoard />
    </div>
  );
}

export default App;

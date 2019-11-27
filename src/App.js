import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Week1 from './components/Week1/Week1';
import Week2 from './components/Week2/Week2';
import Week3 from './components/Week3/Week3';
import Week4 from './components/Week4/Week4';
import Time from './components/Time/Time';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Time />
        <Week1 />
        <Week2 />
        <Week3 />
        <Week4 />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import WeekBoard from './components/WeekBoard/WeekBoard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
        <Header className="Header-Media"/>
        <Slider />
        <WeekBoard className="Week-Media"/>
        <Footer className="Footer-Media"/>
    </div>
  );
}

export default App;
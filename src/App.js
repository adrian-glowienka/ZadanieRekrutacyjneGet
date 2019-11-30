import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Slider from './components/Slider/Slider';
import WeekBoard from './components/WeekBoard/WeekBoard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <WeekBoard />
        <Footer />
    </div>
  );
}

export default App;
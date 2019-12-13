import React from 'react';
import './App.css';
import WeekBoard from './components/WeekBoard/WeekBoard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
        <Header className="Header-Media"/>
        <Dashboard />
        <WeekBoard className="Week-Media"/>
        <Footer className="Footer-Media"/>
    </div>
  );
}

export default App;
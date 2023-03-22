import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './elements/footer';
import { Header } from './elements/header';
import Clock from './elements/clock';
import { Slider } from './elements/slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;

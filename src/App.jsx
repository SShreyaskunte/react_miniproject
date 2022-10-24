import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CarouselImage from './Components/CarouselImage';
import Cards from './Components/Cards';
import FormMain from './Components/FormMain';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Support } from './Components/support';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CarouselImage></CarouselImage>
      <About></About>
      <Services></Services>
      <Support></Support>
      <FormMain></FormMain>
    </div>
  );
}

export default App;

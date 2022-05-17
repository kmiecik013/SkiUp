
import './App.css';
import React from "react";
import ResortList from './ResortList';
import Header from './Header';
import Footer from './Footer';


export default function App() {

const url = "https://api.openweathermap.org/data/2.5/weather?lat={51.0447}&lon={114.0719}&appid={3af3fc922c2fb32e098de9c686e71004}"

  return (
    <div>
      <Header />

      <div className ="ski-content"><ResortList /></div> 
      <Footer />
    </div>
  )
}


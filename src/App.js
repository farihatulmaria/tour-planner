import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';

function App() {
  return (
    <>
      <Header/>
      <Order/>    
      <Footer/>
    </>
  );
}

export default App;
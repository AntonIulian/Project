import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Customers from './pages/Customers';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="app">

    <Nav></Nav>
      <Routes >

        <Route path='/' element={<Customers></Customers>}></Route>
      </Routes>
    </div>
    </>
     
  );
}

export default App;

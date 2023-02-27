import React from 'react';
import './App.css';
import MyNav from './componnents/MyNav';
import { Link, Outlet, redirect, Route, Routes } from 'react-router-dom';
import Footer from './componnents/Footer';
import {  Container } from 'react-bootstrap';







  
function App() {
  

  return (<div>
     
  
    <><main className="py-3">
        <MyNav/>
      <Container>
    
      
    <Outlet/>
      </Container>
     
    </main><Footer /></>
  
  
  </div>)
}

export default App;

import React from 'react';
import './App.css';
import Products from './features/adminProducts/Products';
import Shop from './features/shop/Shop';
import MyNav from './componnents/MyNav';
import { Outlet } from 'react-router-dom';
import Footer from './componnents/Footer';
import { Container } from 'react-bootstrap';



  
function App() {
  return (
    <><main className="py-3">
        <MyNav/>
      <Container>
      
    <Outlet/>
      </Container>
    </main><Footer /></>
  )
  

}

export default App;

import React from 'react';
import './App.css';
import Products from './features/adminProducts/Products';
import Shop from './features/shop_cart/Shop';
import MyNav from './componnents/MyNav';
import { Outlet } from 'react-router-dom';
import Footer from './componnents/Footer';
import { Carousel, Container } from 'react-bootstrap';



  
function App() {
  return (<div>
     
  
    <><main className="py-3">
        <MyNav/>
      <Container>
      
    <Outlet/>
      </Container>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </main><Footer /></>
  
  
  </div>)
}

export default App;

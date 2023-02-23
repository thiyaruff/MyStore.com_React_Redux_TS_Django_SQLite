import React from 'react';
import './App.css';
import Products from './features/adminProducts/Products';
import Shop from './features/shop_cart/Shop';
import MyNav from './componnents/MyNav';
import { Link, Outlet, redirect } from 'react-router-dom';
import Footer from './componnents/Footer';
import { Carousel, Container } from 'react-bootstrap';
import image from '../src/image/shopping.jpg'
import cart from '../src/image/cart.jpg'
import Image from 'react-bootstrap/Image'


  
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
          src={image} height=" 500px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3><br></br>
          <h3 style={{color:'aqua'}}><Link
                    to={redirect ? `/ProductAdmin?redirect=${redirect}` : '/ProductAdmin'}>
                  Design your ecommerce
                </Link></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cart}  height=" 500px"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{textDecoration: 'none',color:'black'}}><Link
                    to={redirect ? `/Cart?redirect=${redirect}` : '/Cart'}>
                    Start Shopping
                </Link></h3>
       
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </main><Footer /></>
  
  
  </div>)
}

export default App;

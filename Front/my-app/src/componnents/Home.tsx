import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link, redirect } from 'react-router-dom'
import image from '../image/shopping.jpg'
import cart from '../image/cart.jpg'

const Home = () => {

  return (
    <div  style={{ backgroundImage:`url(${image})` }}><Carousel>
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



    </div>
  )
}

export default Home
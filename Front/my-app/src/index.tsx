import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './features/adminProducts/Products';
import Shop from './features/shop_cart/Shop';
import { Login } from './features/Login/Login';
import Cart from './features/shop_cart/Cart';
import Register from './features/Login/Register';
import Profile from './features/profile/Profile';
import Reviews from './features/reviews/Reviews';
import Order from './features/order/Order';
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/ProductAdmin" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />} />  
        <Route path="/Sign In" element={<Register />}> </Route>
        <Route path="/Login" element={<Login />}> </Route>
        <Route path="/Profile" element={<Profile />}> </Route>
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Order" element={<Order />} /> 
        </Route>  
       
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </Provider>
  </React.StrictMode>

);



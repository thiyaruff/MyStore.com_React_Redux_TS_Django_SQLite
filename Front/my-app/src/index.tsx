import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './features/adminProducts/Products';
import Shop from './features/shop/Shop';
import { Login } from './features/Login/Login';
import Cart from './features/shop/Cart';
import Register from './features/Login/Register';
import Profile from './features/profile/Profile';
import Reviews from './features/reviews/Reviews';
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
        <Route path="/Shop" element={<Shop />} /> <Route path="/cart" element={<Cart />} />  
        <Route path="/Sign In" element={<Register />}> </Route>
        <Route path="/Login" element={<Login />}> </Route>
        <Route path="/Profile" element={<Profile />}> </Route>
        <Route path="/Reviews" element={<Reviews />} /> 
        </Route>  
       
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, redirect } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Cart from '../shop_cart/Cart';
import { loginAsync, selectUserName, selectLogged, logout } from './loginSlice';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const userName = useAppSelector(selectUserName);


    const logged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();
    const [username, setuser] = useState("")
    const [password, setpwd] = useState("")




    return (
        <div>
<ToastContainer/>
            {logged ?
           <div><Cart/></div>
            :
    <div>

        <Form.Control type="username" placeholder="username" onChange={(e) => setuser(e.target.value)} className="my-1 p-1 rounded" />
        <Form.Control type="password" placeholder="password" onChange={(e) => setpwd(e.target.value)} className="my-1 p-1 rounded" />
        <Button  onClick={() => dispatch(loginAsync({ username, password }))} className="my-1 p-1 rounded">login</Button>
     
   
        <Row className='py-3'>
            <Col>
                New Customer? <Link
                    to={redirect ? `/Sign In?redirect=${redirect}` : '/Sign In'}>
                    Register
                </Link>
            </Col>
        </Row>
    </div>
}
        </div>
    );
}

export default Login

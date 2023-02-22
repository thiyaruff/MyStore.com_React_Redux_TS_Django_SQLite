import { useAppSelector, useAppDispatch } from '../../app/hooks';
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { logout, newLoginAsync, refreshAsync, selectLogged, selectUserName } from "./loginSlice";
import{toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../shop_cart/Cart';
import { Link, redirect } from 'react-router-dom';
const Register = () => {
    const [username, setuname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("a@a.com")
    const [address, setAdress] = useState("")
    const [phone_number, setPhone] = useState("")
    const [age, setAge] = useState(0)
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const userName = useAppSelector(selectUserName);

    useEffect(() => {
        const tmp: any = localStorage.getItem('refresh')
        { tmp && dispatch(refreshAsync(tmp)) }
    }, [])
    return (
        <div>
            <ToastContainer/>
        
            <div style={logged ? { display:"none" } : {}}>
                    <h1 style={{ textAlign: "center" }}>Welcome a new user:
                    </h1>
                    <hr />
                    <Form>
                    <Col xs={7}>
                    <Form.Group className="g-2" controlId="formBasicUserName">
                      
                            <Form.Label>UserName:</Form.Label>
                            <Form.Control type="username" placeholder="userName"  onChange={(e) => setuname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="g-2" controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAdress">
                            <Form.Label>Adress:</Form.Label>
                            <Form.Control type="address" placeholder="Enter address" onChange={(e) => setAdress(e.target.value)} />
                
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone-Number:</Form.Label>
                            <Form.Control type="phone_number" placeholder="Enter phone-number" onChange={(e) => setPhone(e.target.value)} />
                
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Age:</Form.Label>
                            <Form.Control type="age" placeholder="Enter age" onChange={(e) => setAge(+e.target.value)} />
                
                        </Form.Group>

                        
                        </Col>
                    </Form>
                   
                    <Button onClick={() => dispatch(newLoginAsync({ username, password, email,address,phone_number,age }))}>Sign in</Button>
                </div>
          
        </div>
    );
}



{/* <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form> */}

export default Register
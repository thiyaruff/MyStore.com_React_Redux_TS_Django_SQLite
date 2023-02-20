import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PaypalPage from "../../componnents/PaypalPage";
import Products from "../adminProducts/Products";
import { selectProduct } from "../adminProducts/productsSlice";
import { loginAsync, logout, newLoginAsync, refreshAsync, selectAccess, selectLogged, selectUserName, selectUser_id } from "../Login/loginSlice";
import Register from "../Login/Register";
import { addRviewAsync } from "./reviewsSlice";


const Reviews = () => {
const dispatch = useAppDispatch();
const logged = useAppSelector(selectLogged);
const [rating, setRating] = useState(0)
const [comment, setComment] = useState("")
const [prod, setProd] = useState(0)


const access= useAppSelector(selectAccess)
const username= useAppSelector(selectUserName)
const product=useAppSelector(selectProduct)

useEffect(() => {

  const tmp: any = localStorage.getItem('refresh')
  { tmp && dispatch(refreshAsync(tmp)) }
}, [])


      
    
     
  return (
   
   
      <div>
        {logged &&<div>
        hi {username}
                    <h1 style={{ textAlign: "center" }}>Reviews:
                    </h1>
                    <hr />
                    <Form>
                    <Col xs={7}>
                    <Form.Group className="g-2" controlId="formBasicrating">
                      
                            <Form.Label>Rating:</Form.Label>
                            <Form.Control type="number" placeholder="rating"  onChange={(e) => setRating(+e.target.value)} />
                        </Form.Group>

                        <Form.Group className="g-2" controlId="formBasicComment">
                            <Form.Label>Comment:</Form.Label>
                            <Form.Control type="comment" placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
                        </Form.Group>
                        
                        </Col>
                    </Form>
                    <select onChange={(e) => setProd(+e.target.value)}>{product.map(p => <option key={p.id} value={p.id}>{p.desc}</option>)}</select>
                    <Button variant="info"onClick={() =>dispatch(addRviewAsync(({rating,comment,product:prod,name:username})))} >Add</Button>


    </div>}
    <PaypalPage/>
    </div>
    
  );
}

export default Reviews
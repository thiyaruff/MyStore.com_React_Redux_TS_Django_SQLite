
import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {  logout, refreshAsync,  selectLogged, selectUserName } from "../Login/loginSlice";
import { getMyOrderAsync, selectOrder } from '../order/orderSlice';
import { addRviewAsync } from "./reviewsSlice";
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Reviews = () => {
  const dispatch = useAppDispatch();
  const logged = useAppSelector(selectLogged);
  const myOrder = useAppSelector(selectOrder);
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [prod, setProd] = useState(0)


  
  const username = useAppSelector(selectUserName)


  useEffect(() => {

    // const tmp: any = localStorage.getItem('refresh')
    // { tmp && dispatch(refreshAsync(tmp)) }
  
  }, [])

  useEffect(() => {


    dispatch(getMyOrderAsync())
  }, [])





  return (


    <div>
<ToastContainer/>
      {logged &&<div>
        hi {username}
                    <h1 style={{ textAlign: "center" }}>Reviews:
                    </h1>
                    <hr />
                    <p>Choose product to review</p>
                    <select onChange={(e) => setProd(+e.target.value)}>{myOrder.map((p:any)=><option key={p.id} value={p.product}>{p.desc}</option>)} </select>
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
                    <Button variant="info"onClick={() =>dispatch(addRviewAsync(({rating,comment,product:prod,name:username})))} >Add</Button>

        
    </div>}
    </div>

  );
}

export default Reviews
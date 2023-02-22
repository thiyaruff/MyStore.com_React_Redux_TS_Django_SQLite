import React, { useEffect, useState } from 'react'
import { selectCart, initCart, selectupdCartFlag, addProd, selectTotal, updateTotal } from './cartSlice'
import { useSelector } from 'react-redux';
import { Button, Card, Col, Offcanvas, Row, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAccess, selectLogged, selectUserName, selectUser_id } from '../Login/loginSlice';
import { addOrderAsync, getMyOrderAsync } from '../order/orderSlice';
import { getAllProductsAsync, selectProduct } from '../adminProducts/productsSlice';
import { Link, redirect } from 'react-router-dom';

const Cart = () => {


    const total = useAppSelector(selectTotal)
    const username = useAppSelector(selectUserName)
    const myCart = useSelector(selectCart);
    const prod = useAppSelector(selectProduct);
    const dispatch = useAppDispatch();
    const logged = useAppSelector(selectLogged);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => { dispatch(getAllProductsAsync()) }, [])
    useEffect(() => { dispatch(initCart()) }, [dispatch])
    useEffect(() => {
        let total = 0
        myCart.forEach((item: { amount: number; price: number; }) => (total += (item.amount * item.price)));
        dispatch(updateTotal(total))
    }, [myCart])
    // console.log(myCart)



    return (


        <div style={{ display: "flex" }}>

            <div style={{ padding: "20px" }}>
                <Button variant="primary" onClick={handleShow}>
                    Check Out
                </Button>
                <div style={{ width: "60%" }}> <Row xs={3} md={4} className="g-4">
                    {prod.map((product, index) =>
                        <div key={index}>


                            <Col>
                                <Card border="primary" style={{ width: "100%" }}>
                                    <Card.Img variant="top" src={'http://127.0.0.1:8000' + product.image} width="100px" height="100" />
                                    <Card.Body>
                                        <Card.Title>{product.desc}</Card.Title>
                                        <Card.Text>
                                            {product.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button onClick={() => dispatch(addProd({ item: product, amount: 1 }))}>+</Button>
                                    <Button variant="danger" onClick={() => dispatch(addProd({ item: product, amount: -1 }))}>-</Button>
                                </Card>



                            </Col>
                        </div>)}
                </Row>

                </div>
                </div>

                <>


                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{username}'s Cart</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Stack gap={3} style={{ border: 50 }}>

                                {myCart.map((p: any, i: Number) => <div key={`key-${i}`}>
                                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button> */}
                                    <div className="bg-light border"></div> {p.desc} {p.price}  Amount:{p.amount}
                                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button> */}
                                </div>)} </Stack>
                            <div><br />
                                Total: {total}<br /></div>

                            <Link
                                to={redirect ? `/PaypalPage?redirect=${redirect}` : '/PaypalPage'}>
                                Check Out
                            </Link>
                            <hr />
                            <Button onClick={() => dispatch(addOrderAsync({ myCart, total }))}>add order</Button>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
                <Stack gap={3} style={{ border: 50 }}>

                    {myCart.map((p: any, i: Number) => <div key={`key-${i}`}>
                        {/* <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button> */}
                        <div className="bg-light border"></div> {p.desc} {p.price}  Amount:{p.amount}
                        {/* <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button> */}
                    </div>)} </Stack>
                    

            </div>
        



    )
}

export default Cart
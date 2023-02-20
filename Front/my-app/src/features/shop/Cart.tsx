import React, { useEffect, useState } from 'react'
import { selectCart, initCart, selectupdCartFlag, addProd, addOrderAsync, getMyOrderAsync, selectOrder } from '../shop/cartSlice'
import { useSelector } from 'react-redux';
import { Button, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAccess, selectLogged, selectUserName, selectUser_id } from '../Login/loginSlice';

const Cart = () => {
    const logged = useAppSelector(selectLogged);
    const user_id = useAppSelector(selectUser_id);
    const access = useAppSelector(selectAccess);
    const username = useAppSelector(selectUserName)
    const myOrder = useAppSelector(selectOrder)

    //   useEffect(() => {
    //     if (logged)

    //     console.log(access)
    // }, []);

    const myCart = useSelector(selectCart);
    const myCartUpd = useSelector(selectupdCartFlag);
    const [total, settotal] = useState(0)
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(initCart()) }, [dispatch])
    useEffect(() => {
        let tempTotal = 0
        myCart.forEach((item: { amount: number; price: number; }) => (tempTotal += (item.amount * item.price)));
        settotal(tempTotal)
    }, [myCartUpd])
    // console.log(myCart)
    return (
        <div style={{ padding: "20px" }}>
            Cart
            <Stack gap={3} style={{ border: 50 }}>

                {myCart.map((p: any, i: Number) => <div key={`key-${i}`}>
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button> */}
                    <div className="bg-light border"></div> {p.order} {p.price}  Amount:{p.amount}
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button> */}
                </div>)} </Stack>
            Total: {total}
            <Button onClick={() => dispatch(addOrderAsync(myCart))}>add order</Button>
            {logged && <div>hi, {username} get your order:
                <Button onClick={() => dispatch(getMyOrderAsync())}>get order</Button>
                {myOrder.map((p: any, i: Number) => <div key={`key-${i}`}>
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button> */}
                    <div className="bg-light border"></div> {p.desc} {p.price}  Amount:{p.amount}
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button> */}
                </div>)}

            </div>}


        </div>
    )
}

export default Cart
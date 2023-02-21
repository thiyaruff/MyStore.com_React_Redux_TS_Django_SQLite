import React, { useEffect, useState } from 'react'
import { addOrderAsync, getMyOrderAsync, selectOrder } from './orderSlice';
import { Button, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAccess, selectLogged, selectUserName, selectUser_id } from '../Login/loginSlice';
import PaypalPage from '../../componnents/PaypalPage';

const Order = () => {
    const logged = useAppSelector(selectLogged);
    const user_id = useAppSelector(selectUser_id);
    const access = useAppSelector(selectAccess);
    const username = useAppSelector(selectUserName)
    const myOrder = useAppSelector(selectOrder)


    const dispatch = useAppDispatch();

    return (
        <div style={{ padding: "20px" }}>
             {logged && <div>hi, {username} get your order:
                <Button onClick={() => dispatch(getMyOrderAsync())}>get order</Button>
      {myOrder.map((p: any, i: Number) => <div key={`key-${i}`}>
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:+1}))}>+</button> */}
                    <div className="bg-light border"></div> {p.desc} {p.price}  Amount:{p.amount}
                    {/* <button onClick={()=>dispatch(addProd({item:p,amount:-1}))}>-</button> */}
                </div>)}
        </div>}
        
        <PaypalPage/>
        
        </div>

    )
}

export default Order
import React, { useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCart, selectTotal} from '../features/shop_cart/cartSlice';
import { addOrderAsync } from '../features/order/orderSlice';
import { Button } from 'react-bootstrap';


const PaypalPage = () => {
  const total = useAppSelector(selectTotal)
  const myCart = useAppSelector(selectCart);
 const dispatch =useAppDispatch

  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": "AW2uNoVhNxnT6sADpEH5QPkZ3o4DemFCY0ByJe75xQjZNpsH8Mhj5pYK-qikuz_SJcSipvbbjd4lmowW" }}>
            <PayPalButtons      createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: { value: String(total) },
                            },
                        ],
                    });
                }} 
                onApprove={async (data: any, actions: any) => {
                  const details = await actions.order.capture();
                  const name = details.payer.name.given_name;
                  alert("Transaction completed by " + name);
              }}
              
                 />
      </PayPalScriptProvider>

    </div>
  )
}

export default PaypalPage

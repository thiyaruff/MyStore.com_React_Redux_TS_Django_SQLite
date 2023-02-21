import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAppSelector } from '../app/hooks';
import { selectTotal } from '../features/shop_cart/cartSlice';


const PaypalPage = () => {
  const total = useAppSelector(selectTotal)
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
                // onApprove={(data:any, actions:any) => {
                //   return actions.order.capture().then((details:any) => {
                //       const name = details.payer.name.given_name;
                //       alert(`Transaction completed by ${name}`);
                //   });
              // }} 
                 />
      </PayPalScriptProvider>
    </div>
  )
}

export default PaypalPage

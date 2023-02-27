import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Order from '../../model/Order';
import { addOrder, getMyOrder } from './orderAPI';

interface OrderState {

  order: Order[]
}
    
    const initialState: OrderState = {
      order: []
    };

    export const addOrderAsync = createAsyncThunk(
        'order/addOrder',
        async (newOrder: any) => {
      console.log(newOrder)
            const response = await  addOrder(newOrder);
            localStorage.removeItem("cart")
            return response.data;
        }
      );

      export const getMyOrderAsync = createAsyncThunk(
        'order/getMyOrder',
        async () => {
          const response = await getMyOrder();
          return response.data;
          
        }
      );
    
    const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
    initCart: (state: OrderState) => {
            
        }}
   ,

    
    extraReducers: (builder) => {
    builder
    .addCase(addOrderAsync.fulfilled, (state, action) => {
      // localStorage.removeItem("cart")
      
        })
        .addCase(addOrderAsync.rejected, (state, action) => {
          // localStorage.removeItem("cart")
          toast.error('please login', {
            position: toast.POSITION.TOP_CENTER
            })
      
    }).addCase(getMyOrderAsync.fulfilled, (state,action) => {
        state.order=action.payload
        console.log("order",state.order)
      }).addCase(getMyOrderAsync.rejected, (state,action) => {
        toast.error('you have no orders', {
          position: toast.POSITION.TOP_CENTER
          })
      })
    
    },
    });
    
  
    export const selectOrder = (state: any) => state.order.order;
   
    
    export default OrderSlice.reducer;
    
    
    
    
    
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { access } from 'fs';
import Cart from '../../model/Cart';
import { addOrder, getMyOrder } from './cartAPI';



interface CartState {
    myCart: Cart[];
    updCartFlag: boolean;
    access:string,
    order:[]
    }
    
    const initialState: CartState = {
    myCart: [],
    updCartFlag: false,
    access:"",
    order:[]
    };

    export const addOrderAsync = createAsyncThunk(
        'cart/addOrder',
        async (newOrder: any) => {
      console.log(newOrder)
            const response = await  addOrder(newOrder);
            return response.data;
        }
      );

      export const getMyOrderAsync = createAsyncThunk(
        'cart/getMyOrder',
        async () => {
          const response = await getMyOrder();
          return response.data;
          
        }
      );
    
    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    initCart: (state: CartState) => {
            const temp = localStorage.getItem("cart");
            if (temp) {
                state.myCart = JSON.parse(temp);
            }
        },
    addProd: (state: CartState, action: { payload: { item: any; amount: number } }) => {
    const item = action.payload.item;
    const amount = action.payload.amount;
    state.updCartFlag = !state.updCartFlag;
    const tempItemAr = state.myCart.filter(x => x.id === item.id);
    if (tempItemAr.length > 0) {
    if (tempItemAr[0].amount + amount === 0) {
    state.myCart = state.myCart.filter(x => x.id !== item.id);
    } else {
    tempItemAr[0].amount += amount;
    }
    } else {
    if (amount === -1) return;
    const tempProd = { desc: item.desc, price: item.price, id: item.id,image:item.image, amount: 1 };
    state.myCart.push(tempProd);
    }
    localStorage.setItem("cart", JSON.stringify(state.myCart));
    },
    },

    
    extraReducers: (builder) => {
    builder
    .addCase(addOrderAsync.fulfilled, (state, action) => {
      localStorage.removeItem("cart")
      
    }).addCase(getMyOrderAsync.fulfilled, (state,action) => {
        state.order=action.payload
        console.log("order",state.order)
      });
    },
    });
    
    export const { addProd, initCart } = cartSlice.actions;
    export const selectCart = (state: any) => state.cart.myCart;
    export const selectOrder = (state: any) => state.cart.order;
    export const selectupdCartFlag = (state: any) => state.cart.updCartFlag;
    
    export default cartSlice.reducer;
    
    
    
    
    
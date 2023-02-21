import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { access } from 'fs';
import Cart from '../../model/Cart';




interface CartState {
    myCart: Cart[];
    updCartFlag: boolean;
    access:string,
    total:number
    }
    
    const initialState: CartState = {
    myCart: [],
    updCartFlag: false,
    access:"",
    total:0
    
    };

  
    
    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    initCart: (state: CartState) => {
            // const temp = localStorage.getItem("cart");
            // if (temp) {
            //     state.myCart = JSON.parse(temp);
            // }
            state.myCart=[]
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
    updateTotal: (state, action) => {
      state.total = action.payload
      console.log(state.total)
  }
    
    },

   
   
    });
    
    export const { addProd, initCart , updateTotal} = cartSlice.actions;
    export const selectCart = (state: any) => state.cart.myCart;
    export const selectTotal = (state: any) => state.cart.total;
    export const selectupdCartFlag = (state: any) => state.cart.updCartFlag;
    
    export default cartSlice.reducer;
    
    
    
    
    
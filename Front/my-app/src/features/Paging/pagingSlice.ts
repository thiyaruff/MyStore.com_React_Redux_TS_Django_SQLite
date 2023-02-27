import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Products from '../../model/Products';
import {  getAllProducts, getNextProds} from './pagingAPI';

interface ProductsState {

  products:any
  
}
const initialState: ProductsState = {
 
  products:[]
};



export const getAllProductsPagingAsync = createAsyncThunk(
  'paiging/getAllProducts',
  async () => {
      const response = await getAllProducts();
      return response.data;
  }
);

export const getMoreProdsAsync = createAsyncThunk(
  'paging/getmoreproducts',
  async (creds:string) => {
    console.log(creds)
    console.log('first')
    const response = await getNextProds(creds);
    return response.data;
  }
);

export const pagingSlice = createSlice({
  name: 'paging',
  initialState,
  reducers: {
      increment: (state) => {
      },
  },
  extraReducers: (builder) => {
      builder.addCase(getAllProductsPagingAsync.fulfilled, (state, action) => {
          console.log(action.payload)
          state.products = action.payload
      }).addCase(getMoreProdsAsync.fulfilled, (state, action) => {
        console.log('getmore',action.payload)
        state.products=action.payload
        })
     
  },
});

export const { } = pagingSlice.actions;
export const selectProduct = (state: RootState) => state.paging.products;
export default pagingSlice.reducer;





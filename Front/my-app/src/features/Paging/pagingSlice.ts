import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {  getAllProducts, getNextProds} from './pagingAPI';

interface ProductsState {

  products:any
  
}
const initialState: ProductsState = {
 
  products:[]
};



export const getAllProductsPagingAsync = createAsyncThunk(
  'paging/getAllProducts',
  async (allProducts:boolean = false) => {
      const response = await getAllProducts(allProducts);
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
        
          state.products = action.payload
          console.log(state.products)
      }).addCase(getMoreProdsAsync.fulfilled, (state, action) => {

        state.products=action.payload
        })
     
  },
});

export const { } = pagingSlice.actions;
export const selectProducts = (state: RootState) => state.paging.products;
export default pagingSlice.reducer;





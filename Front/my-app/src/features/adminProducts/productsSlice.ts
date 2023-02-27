import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Products from '../../model/Products';
import { addProduct,  delProduct, updProduct} from './productsAPI';

interface ProductsState {

  products:Products[]
  
}
const initialState: ProductsState = {
 
  products:[]
};


export const addProductAsync = createAsyncThunk(
  'products/addProduct',
  async (newProduct: Products) => {

      const response = await  addProduct(newProduct);
      return response.data;
  }
);


export const delProductAsync = createAsyncThunk(
  'products/delProduct',
  async (id:number ) => {
      const response = await delProduct(id);
      return response.data;
  }
);

export const updProductAsync = createAsyncThunk(
  'products/updProduct',
  async (pro:any ) => {
      const response = await updProduct(pro);
      return response.data;
  }
);
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      increment: (state) => {
      },
  },
  extraReducers: (builder) => {
      builder.addCase(addProductAsync.fulfilled, (state, action) => {
          console.log(action.payload)
          state.products.push(action.payload)
      })
      
     
      .addCase(updProductAsync.fulfilled, (state, action) => {
          console.log(action.payload.id)
          const temp= state.products.filter(pro => pro.id === action.payload.id)[0]
          temp.price=action.payload.price
          temp.desc =action.payload.desc
          temp.image =action.payload.image
          temp.category =action.payload.category
          temp.rating =action.payload.rating
      });
  },
});

export const { } = productsSlice.actions;
export const selectProduct = (state: RootState) => state.products.products;
export default productsSlice.reducer;





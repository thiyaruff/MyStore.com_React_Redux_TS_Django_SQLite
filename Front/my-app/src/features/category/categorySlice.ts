import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Category from '../../model/Category';
import { addCategory, getAllCategory } from './categoryAPI';


interface CategoryState {
  category:Category[]
}
const initialState: CategoryState = {
  category:[]
};


export const getCatsAsync = createAsyncThunk(
    'category/getAllCategory',
    async () => {
      const response = await getAllCategory();
      return response.data;
    }
  );
  export const addCategoryAsync = createAsyncThunk(
    'category/addCategory',
    async (newCat: Category) => {
  
        const response = await addCategory(newCat);
        return response.data;
    }
  );
  


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      increment: (state) => {
      },

  },
      extraReducers: (builder) => {
         builder.addCase(getCatsAsync.fulfilled, (state,action) => {
            state.category=action.payload
          })
          .addCase(addCategoryAsync.fulfilled, (state, action) => {
            console.log(action.payload)
            state.category.push(action.payload)
          });
        },
      });


export const { } = categorySlice.actions;
export const selectCategory = (state: RootState) => state.category.category;
export default categorySlice.reducer;





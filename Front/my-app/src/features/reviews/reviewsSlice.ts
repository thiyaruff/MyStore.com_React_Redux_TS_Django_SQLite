import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addReview } from './reviewsAPI';
import jwt_decode from "jwt-decode"
import Reviews from '../../model/Reviews';


export interface ReviewsState {
  review: Reviews[]
  amountReviews: number
  rating: number
 
}

const initialState: ReviewsState = {
  review: [], 
  amountReviews: 0, 
  rating: 0, 
 
}


export const addRviewAsync = createAsyncThunk(
  'reviews/addReview',
  async (newReview: Reviews) => {

      const response = await  addReview(newReview);
      console.log(newReview)
      return response.data;
  }
);


export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
      increment: (state) => {
      },

      
  },
  extraReducers: (builder) => {
    builder
      .addCase(addRviewAsync.fulfilled, (state, action) => {
     
     
  
  });
      
   
}
});

export const { } =reviewsSlice.actions;
export default reviewsSlice.reducer;




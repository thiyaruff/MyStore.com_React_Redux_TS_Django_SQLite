import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addReview, getReviewsPerProduct } from './reviewsAPI';
import jwt_decode from "jwt-decode"
import Reviews from '../../model/Reviews';
import { toast } from 'react-toastify';
import { RootState } from '../../app/store';


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
export const getReviewsPerProductAsync = createAsyncThunk(
    'reviews/getReviewsPerProduct', 
    async (pk: number) => {
        const response = await getReviewsPerProduct(pk);
        return response.data;
    }
)


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
        toast.success(`Thank you`)
     
  
  }).addCase(addRviewAsync.rejected, (state, action) => {
    toast.error(`you allready sent review of this product`)
     
  
  })
  .addCase(getReviewsPerProductAsync.fulfilled, (state, action: { payload: { id:number } }) => {
    console.log(action.payload)
})
      
   
}
});

export const { } =reviewsSlice.actions;
export const selectReview = (state: RootState) => state.reviews.review;
export default reviewsSlice.reducer;




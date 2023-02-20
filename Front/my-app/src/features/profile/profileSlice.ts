import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProfileState from '../../model/Profile';
import { addProfile } from './profileAPI';
import jwt_decode from "jwt-decode"


const initialState: ProfileState = {
  address: "",
  phone_number: "",
  age:0,
  logged:false,
  access:"",
  userName:""
};


export const addProfileAsync = createAsyncThunk(
  'profile/addProfile',
  async (newProfile: any) => {

      const response = await  addProfile(newProfile);
      console.log(newProfile)
      return response.data;
  }
);


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
      increment: (state) => {
      },

      
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProfileAsync.fulfilled, (state, action) => {
      const decoded:any = jwt_decode(action.payload.access);
      // state.logged=true
      state.access=decoded.access
      console.log(action.payload)
     state.address=action.payload.address
     state.phone_number=action.payload.phone_number
     state.age=action.payload.age
  
  });
      
   
}
});

export const { } =profileSlice.actions;
export default profileSlice.reducer;




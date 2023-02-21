import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/adminProducts/productsSlice';
import loginReducer from '../features/Login/loginSlice';
import cartReducer from '../features/shop_cart/cartSlice';
import categoryReducer from '../features/category/categorySlice';
import profileReducer from '../features/profile/profileSlice';
import reviewsReducer from '../features/reviews/reviewsSlice';
import OrderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    products:productsReducer,
    login:loginReducer,
    cart:cartReducer,
    category:categoryReducer,
    profile:profileReducer,
    reviews:reviewsReducer,
    order:OrderReducer,

    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

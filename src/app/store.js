import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/auth/cartSlicce'
export default configureStore({
  reducer: {
    auth:authReducer,
    cart: cartReducer
  }
})
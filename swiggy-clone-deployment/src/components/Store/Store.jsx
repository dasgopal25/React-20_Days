import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice'

const Stores = configureStore({
  reducer: {
    CartSlice: cartReducer
  },
})

export default Stores;
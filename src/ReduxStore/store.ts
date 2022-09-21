import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import DataSlice from './DataSlice'

export default configureStore({
  reducer: {
    Data:DataSlice ,
    Cart:CartSlice
  },
})
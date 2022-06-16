import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../store/TodoSlice' 

export const Store = configureStore({
  reducer: {
    TodoSlice
  },
})
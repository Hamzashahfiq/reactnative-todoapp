import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../store/TodoSlice' 
import TodoAuthSlice from '../store/TodoAuthSlice'

export const Store = configureStore({
  reducer: {
    TodoSlice,
    TodoAuthSlice
  },
})
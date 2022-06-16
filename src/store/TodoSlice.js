import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task:[{id:'1',taskDetail:'react Native'},{id:'2',taskDetail:'First project in React Native'}]
}

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
   addTask: (state, action) => {
      state.task.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((item) => item.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask,deleteTask } = TodoSlice.actions

export default TodoSlice.reducer
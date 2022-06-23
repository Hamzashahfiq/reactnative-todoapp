import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';


export const getTodoTask = createAsyncThunk(
  'Todo/getTodoTask',
  async ({setGetDataLoading}) => {
    try {
      setGetDataLoading(true)
      const usersCollection = await firestore().collection('todo').get()
      
      var todos = []
      usersCollection.forEach(item => {
        todos.push({UID: item.id, ...item.data()});
      })
    }

    catch (error) {
      Alert.alert(error.message)
    }
    finally {
      setGetDataLoading(false)
    }

    return todos;
  }
)

const initialState = {
  task:[]
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
    completdTask: (state, action) => {
      state.task = state.task.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoTask.fulfilled, (state, action) => {
      state.task = action.payload
    })
  },


})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, completdTask } = TodoSlice.actions

export default TodoSlice.reducer
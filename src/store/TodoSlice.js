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
export const addTodoTask = createAsyncThunk(
  'Todo/addTodoTask',
  async ({taskData,setAddDataLoading,setTask}) => {
    try {
      setAddDataLoading(true)
      const usersCollection = await firestore()
      .collection('todo')
      .add(taskData)
      
       var addTodo = {UID : usersCollection.id, ...taskData}
    }

    catch (error) {
      Alert.alert(error.message)
    }
    finally {
      setAddDataLoading(false)
      setTask('')
    }

    return addTodo;
  }
)
export const deleteTodoTask = createAsyncThunk(
  'Todo/deleteTodoTask',
  async ({item,setDeleteDataLoading}) => {
    try {
      setDeleteDataLoading(true)
      const usersCollection = await firestore()
      .collection('todo')
      .doc(item.UID)
      .delete()
      Alert.alert('Task has been Deleted')
    }

    catch (error) {
      Alert.alert(error.message)
    }
    finally {
      setDeleteDataLoading(false)
    }

    return item;
  }
)
export const updateTodoTask = createAsyncThunk(
  'Todo/updateTodoTask',
  async ({newItem,setUpdateDataLoading}) => {
    try {
      setUpdateDataLoading(true)
      const usersCollection = await firestore()
      .collection('todo')
      .doc(newItem.UID)
      .update({
        completed: newItem.completed,})
      if (newItem.completed){
        Alert.alert('Task has been completed')
        }else{
            Alert.alert('Uncompleted Task')
        }
    }

    catch (error) {
      Alert.alert(error.message)
    }
    finally {
      setUpdateDataLoading(false)
    }

    return newItem;
  }
)
export const newUtdTodoTask = createAsyncThunk(
  'Todo/newUtdTodoTask',
  async ({ updatedTask, setTaskUpdateDataLoading, setTask,setIsUpdateBtn }) => {
    try {
      setTaskUpdateDataLoading(true)
      const usersCollection = await firestore()
      .collection('todo')
      .doc(updatedTask.UID)
      .update({
        task: updatedTask.task})
        Alert.alert('Task has been updated')
    }

    catch (error) {
      Alert.alert(error.message)
    }
    finally {
      setTaskUpdateDataLoading(false)
      setTask('')
      setIsUpdateBtn(false)
    }

    return updatedTask;
  }
)

const initialState = {
  task:[]
}

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoTask.fulfilled, (state, action) => {
      state.task = action.payload
    })
    .addCase(addTodoTask.fulfilled, (state, action) => {
        state.task.push(action.payload)
    })
    .addCase(deleteTodoTask.fulfilled, (state, action) => {
      state.task = state.task.filter((item) => item.UID !== action.payload.UID)
    })
    .addCase(updateTodoTask.fulfilled, (state, action) => {
        state.task = state.task.map((item) => {
          if (item.UID === action.payload.UID) {
            return action.payload
          } else {
            return item
          }
        })
    })
    .addCase(newUtdTodoTask.fulfilled, (state, action) => {
        state.task = state.task.map((item) => {
          if (item.UID === action.payload.UID) {
            return action.payload
          } else {
            return item
          }
        })
    })
  },


})

// Action creators are generated for each case reducer function
export const { } = TodoSlice.actions

export default TodoSlice.reducer
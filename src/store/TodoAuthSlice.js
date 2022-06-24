import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';





export const checkLogin = createAsyncThunk(
  'todo/checkLogin',
  async ({userDtl,setLogBtnLoading},thunkAPI) => {
    try{
        setLogBtnLoading(true)
        let response   = await auth().signInWithEmailAndPassword(userDtl.userName,userDtl.password)
        }
     catch (error){
      Alert.alert(error.message)
      }
      finally{
        setLogBtnLoading(false)
      }
    
   return true;
  }
)

// export const fatchCurrentUser = createAsyncThunk(
//   'todo/fatchCurrentUser',
//   async ({navigation},thunkAPI) => {
//     try{
//       let isCurrentUser;
//       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//       function onAuthStateChanged(user) {
//               if (!user){
//                    isCurrentUser = false
//               }else{
//                 isCurrentUser = true
//               }
//        }  
//       }
//      catch (error){
//       Alert.alert(error.message)
//       }
//     return isCurrentUser;
//   }
// )

export const checkLogout = createAsyncThunk(
  'todo/checkLogout',
  async () => {
    try{
      await auth().signOut()
      }
     catch (error){
      Alert.alert(error.message)
      }
    return false;
  }
)




export const TodoAuthSlice = createSlice({
  name: 'todo',
  initialState : {
    isLogin:false
  },
  reducers: {
    setLogin(state, action) {
       state.isLogin = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      state.isLogin = action.payload
  })
//   .addCase(fatchCurrentUser.fulfilled, (state, action) => {
//     state.isLogin = action.payload       
// })
  .addCase(checkLogout.fulfilled, (state, action) => {
    state.isLogin = action.payload
})
},

})

// Action creators are generated for each case reducer function
export const { setLogin } = TodoAuthSlice.actions

export default TodoAuthSlice.reducer

// thunk logic

// export const setLoginDetail = (navigation,userDtl) => {
//     return async function setLoginThunk (dispatch, getState) {
//         try{
//          let response   = await auth().signInWithEmailAndPassword(userDtl.userName,userDtl.password)
//          console.log('response')
//          console.log(response)
//          console.log('response')
//          navigation.navigate('task')
//          dispatch(setLogin())
//          Alert.alert('User Login successfully.')
 
//         }catch (error){
//           Alert.alert(error)
//         }
//     }
//  }

//  export const fatchCurrentUser = (navigation) => {
//   return async function currentUserThunk (dispatch, getState) {
//       try{
        
//         auth().onAuthStateChanged(user => {
//           if (!user) {
//             navigation.navigate('login')
//             return;
//           }
//           navigation.navigate('task')
//       });
     
     

//       }catch (error){
//         console.log(error)
//       }
//   }
// }

// export const setLogoutHandler = () => {
//   return async function setLogoutThunk (dispatch, getState) {
//       try{
        
//         auth().signOut()
//         // navigation.navigate('login')
//         dispatch(setLogout())
//         Alert.alert('User Login successfully.')
       

//       }catch (error){
//         console.log(error)
//       }
//   }
// }
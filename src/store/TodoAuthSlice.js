import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';





export const checkLogin = createAsyncThunk(
  'todo/checkLogin',
  async ({userDtl,setLogBtnLoading},thunkAPI) => {
    let checklogin
    try{
        setLogBtnLoading(true)
        let response   = await auth().signInWithEmailAndPassword(userDtl.userName,userDtl.password)
        checklogin = true 
      }
     catch (error){
      Alert.alert(error.message)
      checklogin = false
      }
      finally{
      if (!checklogin) {
          setLogBtnLoading(false)
        }
      
      }
     
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
  async ({setLogoutLoading}) => {
    try{
      let checkLogoutComp
      setLogoutLoading(true)
      await auth().signOut()
      checkLogoutComp = true
      }
     catch (error){
      Alert.alert(error.message)
      checkLogoutComp = false
      }
      finally {
         if (!checkLogoutComp){
          setLogoutLoading(false)
         }
       
      }
  }
)
export const signupHandler = createAsyncThunk(
  'todo/checkLogout',
  async ({userDtl,setSignUpLoading}) => {
    let checkSignUp
    try{
      setSignUpLoading(true)
      let response   = await auth().createUserWithEmailAndPassword (userDtl.userName,userDtl.password)
      checkSignUp = true
    }
     catch (error){
      Alert.alert(error.message)
      checkSignUp = false
      }
      finally {
        if (!checkSignUp) {
          setSignUpLoading(false)
        }
       
      }
  }
)




export const TodoAuthSlice = createSlice({
  name: 'todo',
  initialState : {
     isSignUp : false,
  },
  reducers: {
    setScreenSignUp(state, action) {
       state.isSignUp = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkLogin.fulfilled, (state, action) => {
     
  })
//   .addCase(fatchCurrentUser.fulfilled, (state, action) => {
//     state.isLogin = action.payload       
// })
  .addCase(checkLogout.fulfilled, (state, action) => {
    
})
},

})

// Action creators are generated for each case reducer function
export const { setScreenSignUp } = TodoAuthSlice.actions

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
import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';



export const checkLogin = createAsyncThunk(
  'todo/checkLogin',
  async (userDtl,afterLoginHander) => {
    console.log(userDtl.userName)
    console.log(userDtl.password)
     
    try{
        let response   = await auth().signInWithEmailAndPassword(userDtl.userName,userDtl.password)
        console.log(response)
        dispatch(afterLoginHander())
              }
     catch (error){
                console.log(error.message)
              }
     return null
           
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
      state.isLogin = true;
  })},

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
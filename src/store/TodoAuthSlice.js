import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


export const TodoAuthSlice = createSlice({
  name: 'Todo',
  initialState : {
    isLogin:false
  },
  reducers: {
    setLogin(state, action) {
       state.isLogin = true;
    }
  },

})

// Action creators are generated for each case reducer function
export const { setLogin } = TodoAuthSlice.actions

export default TodoAuthSlice.reducer

// thunk logic

export const setLoginDetail = (navigation,userDtl) => {
    return async function setLoginThunk (dispatch, getState) {
        try{
         let response   = await auth().signInWithEmailAndPassword(userDtl.userName,userDtl.password)
         console.log('response')
         console.log(response)
         console.log('response')
         navigation.navigate('task')
         dispatch(setLogin())
         Alert.alert('User Login successfully.')
 
        }catch (error){
          Alert.alert(error)
        }
    }
 }

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
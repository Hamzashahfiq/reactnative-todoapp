import { View, Text, Alert } from 'react-native'
import React,{useState} from 'react'
import { setLoginDetail } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'


const userdetail={
    userName :"",
    password :""
}
export default function useLoginScreen() {
    const [userDtl, setUserDtl] = useState(userdetail)
    const dispatch = useDispatch()


    const loginHandler = (navigation) =>{
        if (!userDtl.userName || !userDtl.password){
            Alert.alert('Please input all data first')
            return;
        }
        dispatch(setLoginDetail(navigation,userDtl))
        
         
        
    }
    const setUserName = (e) =>{
        setUserDtl({...userDtl,userName:e})
        
    }
    const setPassword = (e) =>{
        setUserDtl({...userDtl,password:e})
        
    }

  return ({
    loginHandler,
    userDtl,
    setUserName,
    setPassword

  })
}
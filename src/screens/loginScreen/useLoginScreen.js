import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { checkLogin } from '../../store/TodoAuthSlice'
import { useDispatch,useSelector } from 'react-redux'
import { setScreenSignUp } from '../../store/TodoAuthSlice'


const userdetail = {
    userName: "",
    password: ""
}
export default function useLoginScreen() {
    const [userDtl, setUserDtl] = useState(userdetail)
    const [logBtnLoading, setLogBtnLoading] = useState(false)
    const dispatch = useDispatch()
    const isSignUp = useSelector((store) => store.TodoAuthSlice.isSignUp)

    const loginHandler = () => {
        if (!userDtl.userName || !userDtl.password) {
            Alert.alert('Please input all data first')
            return;
        }
        
        dispatch(checkLogin({userDtl,setLogBtnLoading}))

    }
    
    const setUserName = (e) => {
        setUserDtl({ ...userDtl, userName: e })

    }
    const setPassword = (e) => {
        setUserDtl({ ...userDtl, password: e })

    }

    return ({
        loginHandler,
        userDtl,
        setUserName,
        setPassword,
        logBtnLoading,
        setScreenSignUp,
        isSignUp

    })
}
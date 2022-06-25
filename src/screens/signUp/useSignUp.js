import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { setScreenSignUp } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'
import { signupHandler } from '../../store/TodoAuthSlice'


const userdetail = {
    userName: "",
    password: ""
}
export default function useSignUp() {
    const [userDtl, setUserDtl] = useState(userdetail)
    const [signUpLoading, setSignUpLoading] = useState(false)
    const dispatch = useDispatch()

    const signHandler = () => {
        if (!userDtl.userName || !userDtl.password) {
            Alert.alert('Please input all data first')
            return;
        }
        
        dispatch(signupHandler({userDtl,setSignUpLoading}))

    }
    
    const setUserName = (e) => {
        setUserDtl({ ...userDtl, userName: e })

    }
    const setPassword = (e) => {
        setUserDtl({ ...userDtl, password: e })

    }

    return ({
        signHandler,
        userDtl,
        setUserName,
        setPassword,
        signUpLoading,
        setScreenSignUp

    })
}
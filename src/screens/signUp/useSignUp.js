import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { setScreenSignUp } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'


const userdetail = {
    userName: "",
    password: ""
}
export default function useSignUp() {
    const [userDtl, setUserDtl] = useState(userdetail)
    const [logBtnLoading, setLogBtnLoading] = useState(false)
    const dispatch = useDispatch()

    const loginHandler = () => {
        if (!userDtl.userName || !userDtl.password) {
            Alert.alert('Please input all data first')
            return;
        }
        
        // dispatch(checkLogin({userDtl,setLogBtnLoading}))

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
        setScreenSignUp

    })
}
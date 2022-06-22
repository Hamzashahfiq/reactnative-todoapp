import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { checkLogin } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'
import {useNavigation} from '@react-navigation/native';


const userdetail = {
    userName: "",
    password: ""
}
export default function useLoginScreen() {
    const [userDtl, setUserDtl] = useState(userdetail)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const loginHandler = () => {
        if (!userDtl.userName || !userDtl.password) {
            Alert.alert('Please input all data first')
            return;
        }
        
        dispatch(checkLogin({userDtl}))

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
        setPassword

    })
}
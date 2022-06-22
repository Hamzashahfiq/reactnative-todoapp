import { View, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import Styles from './SplashScreenStyle'
import { useDispatch } from 'react-redux'
import { fatchCurrentUser } from '../../store/TodoAuthSlice'

export default function SplashScreen({navigation}) {
    const dispatch = useDispatch()


    useEffect(() =>{
        dispatch(fatchCurrentUser({navigation}))
    },[])
  
    
    return (
        <View style={Styles.loader}>
            <ActivityIndicator size='large' color='blue' />
        </View>
    )
}
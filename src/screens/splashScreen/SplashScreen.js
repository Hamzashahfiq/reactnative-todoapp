import { View, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import Styles from './SplashScreenStyle'


export default function SplashScreen({navigation}) {
  
    
    return (
        <View style={Styles.loader}>
            <ActivityIndicator size='large' color='blue' />
        </View>
    )
}
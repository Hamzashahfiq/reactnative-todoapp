import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import CompData from '../../componets/compData/CompData'
import Styles from './CompletedTaskStyle'

export default function CompletedTask() {
  return (
    <View style={Styles.container}>
      <ImageBackground style={Styles.backgroudImage}
        source={require('../../assets/comleted.jpg')} resizeMode='cover'>
        <View style={Styles.dataDisView}>
        <CompData /></View>
      </ImageBackground>
    </View>
  )
}
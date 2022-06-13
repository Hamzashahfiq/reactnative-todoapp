import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './TaskStyle'




export default function Task() {
  return (
    <View style={styles.container}>
      <ImageBackground style = {styles.backgroudImage}
      source={require('../assets/eiffelbackgroundimage.jpg') } resizeMode ='cover'>
        <Text>Image</Text>
      </ImageBackground>
    </View>
  )
}
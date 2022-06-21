import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './TouchbuttonStyle'

export default function TouchButton({btnName, pressButton}) {
  return (
    <TouchableOpacity
        style={Styles.button}
        onPress={pressButton}
      >
        <Text style={Styles.buttonText} >{btnName}</Text>
      </TouchableOpacity>
  )
}
import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'

export default function ActivityLoader() {
  return (
    <View>
       <ActivityIndicator size="small" color="white" />
    </View>
  )
}
import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'

export default function ActivityLoader({color,size}) {
  return (
       <ActivityIndicator size={size || "small"} color={color || "white"} />
  )
}
import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'

export default function ActivityLoader({color,size, style}) {
  return (
       <ActivityIndicator style = {style} size={size || "small"} color={color || "white"} />
  )
}
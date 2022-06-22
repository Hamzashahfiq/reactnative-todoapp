import React, { useState } from 'react'
import { View, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import styles from './TaskStyle'
import InputField from '../../componets/inputfield/InputField'
import useTask from './useTask'
import Icon from 'react-native-vector-icons/FontAwesome';
import DataDisplay from '../../componets/dataDispaly/DataDisplay'
import { setLogoutHandler } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'





export default function Task({navigation}) {
   const { task, setTask, addTaskHandler } = useTask()
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroudImage}
        source={require('../../assets/eiffelbackgroundimage.jpg')} resizeMode='cover'>
        <KeyboardAvoidingView style={styles.KeyAvoidingView}>
          <View style={styles.dataDisView}>
            {/* <Button
              onPress={dispatch(setLogoutHandler)}
              title="Logout"
              color="#841584"
            />*/}
            <DataDisplay task={task} /> 
          </View>
          <View style={styles.mainInputView}>
            <InputField task={task} onPressText={(e) => setTask(e)} onKeyHandler={addTaskHandler} />
            <View style={styles.inputButton}>
              <TouchableOpacity onPress={addTaskHandler}><Icon name="check" size={35} color="#fb5607" /></TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground> 
      
    </View>
  )
}
import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import styles from './TaskStyle'
import InputField from '../../componets/inputfield/InputField'
import useTask from './useTask'
import Icon from 'react-native-vector-icons/FontAwesome';
import DataDisplay from '../../componets/dataDispaly/DataDisplay'
import { checkLogout } from '../../store/TodoAuthSlice'
import { useDispatch } from 'react-redux'
import SplashScreen from '../splashScreen/SplashScreen'
import ActivityLoader from '../../componets/activityLoader/ActivityLoader'







export default function Task({ navigation }) {
  const { task, setTask, addTaskHandler, getDataLoading, addDataLoading, 
    isUpdateBtn, taskUpdatedHandler,updateTaskHandler,taskUpdateDataLoading } = useTask()
  const dispatch = useDispatch()


  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroudImage}
        source={require('../../assets/eiffelbackgroundimage.jpg')} resizeMode='cover'>
        <KeyboardAvoidingView style={styles.KeyAvoidingView}>

          <View style={styles.dataDisView}>
            <Button
              onPress={() => dispatch(checkLogout())}
              title="Logout"
              color="#841584"
            />
            <DataDisplay task={task} taskUpdatedHandler={taskUpdatedHandler} />
          </View>
          <View style={styles.mainInputView}>
            <InputField task={task} onPressText={(e) => setTask(e)} onKeyHandler={addTaskHandler} />
            <View style={styles.inputButton}>

              {isUpdateBtn ?
                taskUpdateDataLoading ? <TouchableOpacity><ActivityLoader color='red' size='large' /></TouchableOpacity> :
                  <TouchableOpacity onPress={updateTaskHandler}><Icon name="check" size={35} color="#fb5607" /></TouchableOpacity> :
                addDataLoading ? <TouchableOpacity><ActivityLoader color='red' size='large' /></TouchableOpacity> :
                  <TouchableOpacity onPress={addTaskHandler}><Icon name="check" size={35} color="#fb5607" /></TouchableOpacity>}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

    </View>
  )
}
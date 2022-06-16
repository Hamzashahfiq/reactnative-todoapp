import React, {useState} from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import uuid from 'react-native-uuid';
import { addTask } from '../../store/TodoSlice';

export default function useTask() {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()

   const addTaskHandler = () => {
      if (!task) {
         Alert.alert("Please input any task first");
         return;
      } 

      taskData ={
         id:uuid.v4(),
         taskDetail:task,

      }
      dispatch(addTask(taskData));
      setTask('')
   }
// const onKeyHandler =({ nativeEvent: { key: keyValue } }) =>{
//     console.log(keyValue)
//    if(keyValue === '')
//    {
//       Alert.alert("Please input any task first");
//       addTaskHandler();
//    }
// }

  return (
     {
        task,
        setTask,
        addTaskHandler,
       
     }
  )
}
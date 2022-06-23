import React, {useState,useEffect} from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import uuid from 'react-native-uuid';
import { addTask } from '../../store/TodoSlice';
import { getTodoTask } from '../../store/TodoSlice';

export default function useTask() {
    const [task, setTask] = useState("")
    const [getDataLoading, setGetDataLoading] = useState(false)  
   
    const dispatch = useDispatch()

       
    useEffect(() => {
     
      dispatch(getTodoTask({setGetDataLoading}));
  }, [])
  

   const addTaskHandler = () => {
      if (!task) {
         Alert.alert("Please input any task first");
         return;
      } 

      taskData ={
         id:uuid.v4(),
         taskDetail:task,
         important: false,

      }
      dispatch(addTask(taskData));
      setTask('')
   }


  return (
     {
        task,
        setTask,
        addTaskHandler,
        getDataLoading
       
     }
  )
}
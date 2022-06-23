import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { getTodoTask, addTodoTask,newUtdTodoTask } from '../../store/TodoSlice';


export default function useTask() {
   const [task, setTask] = useState("")
   const [getDataLoading, setGetDataLoading] = useState(false)
   const [addDataLoading, setAddDataLoading] = useState(false)
   const [taskUpdateDataLoading, setTaskUpdateDataLoading] = useState(false)
   const [isUpdateBtn, setIsUpdateBtn] = useState(false)
   const [updateTask, setUpdateTask] = useState('')

   const dispatch = useDispatch()


   useEffect(() => {

      dispatch(getTodoTask({ setGetDataLoading }));
   }, [])


   const addTaskHandler = () => {
      if (!task) {
         Alert.alert("Please input any task first");
         return;
      }

      taskData = {

         task: task,
         completed: false,
         important: false,

      }
      dispatch(addTodoTask({ taskData, setAddDataLoading, setTask }));
   }
   const updateTaskHandler = () => {
      if (!task) {
         Alert.alert("Please input any task first");
         return;
      }

      let updatedTask = {
         ...updateTask,
         task: task,
       

      }
      dispatch(newUtdTodoTask({ updatedTask, setTaskUpdateDataLoading, setTask,setIsUpdateBtn}));
   }
   const taskUpdatedHandler = (item) => {
      setUpdateTask(item)
      setTask(item.task)
      setIsUpdateBtn(true)
   }

   return (
      {
         task,
         setTask,
         addTaskHandler,
         getDataLoading,
         addDataLoading,
         taskUpdatedHandler,
         isUpdateBtn,
         updateTaskHandler,
         taskUpdateDataLoading

      }
   )
}
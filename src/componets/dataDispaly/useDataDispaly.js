import { Alert } from 'react-native'
import {useDispatch } from 'react-redux';
import { deleteTask,completdTask } from '../../store/TodoSlice';




export default function useDataDisplay() {
  
  const dispatch = useDispatch()

   
    
 
    const deleteHandler = (item) => {
        dispatch(deleteTask(item))
        Alert.alert('Task has been Deleted')
    }
    const compHandler = (item) => {
         let newItem = {
            ...item,
            completed : !item.completed
         }
        
        dispatch(completdTask(newItem))
        if (newItem.completed){
        Alert.alert('Task has been completed')
        }else{
            Alert.alert('Uncompleted Task')
        }
    }
    return (
        
      {
        deleteHandler,
        compHandler
      }

    )
}
import {useDispatch } from 'react-redux';
import { deleteTodoTask, updateTodoTask } from '../../store/TodoSlice';
import React,{useState} from 'react'




export default function useCompData() {
  const [deleteDataLoading, setDeleteDataLoading] = useState(false)
  const [updateDataLoading, setUpdateDataLoading] = useState(false)
  const [deleteUID, setDeleteUID] = useState('')
  const [updatedUID, setUpdatedUID] = useState('')
  
  const dispatch = useDispatch()

   
    
 
    const deleteHandler = (item) => {
      setDeleteUID(item.UID)
        dispatch(deleteTodoTask({item,setDeleteDataLoading}))
    }
    const compHandler = (item) => {
          setUpdatedUID(item.UID)
         let newItem = {
            ...item,
            completed : !item.completed
         }
        
        dispatch(updateTodoTask({newItem, setUpdateDataLoading}))
      
    }
    
    return (
        
      {
        deleteHandler,
        compHandler,
        deleteDataLoading,
        deleteUID,
        updateDataLoading,
        updatedUID,
      }

    )
}
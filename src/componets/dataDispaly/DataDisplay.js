import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import Styles from './DataDisplayStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../store/TodoSlice';

export default function DataDisplay({ task }) {
    const [check, setCheck] = useState(false)
    const taskData = useSelector((store) => store.TodoSlice.task)
    const dispatch = useDispatch()

    const deleteHandler = (item) => {
        dispatch(deleteTask(item))
        Alert.alert('Task has been Deleted')
    }
    return (
        <>
            {/* <Text>Task</Text> */}
            <FlatList
                data={taskData}
                renderItem={({ item }) => {
                    return (
                        <View style={Styles.dataView}>
                            <CheckBox
                                style={Styles.CheckBox}
                                onClick={() => setCheck(!check)}
                                isChecked={check}

                            />
                            <Text style={Styles.dataText}>{item.taskDetail}</Text>
                            <TouchableOpacity style={Styles.delBtn} onPress={() => deleteHandler(item)}>
                                <Icon name="trash" size={22} color="#fb5607" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />


        </>

    )
}
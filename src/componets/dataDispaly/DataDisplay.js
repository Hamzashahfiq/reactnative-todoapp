import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './DataDisplayStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import { useSelector } from 'react-redux';
import useDataDisplay from './useDataDispaly';

export default function DataDisplay({ task }) {
    const { deleteHandler, compHandler } = useDataDisplay();
    const taskData = useSelector((store) => store.TodoSlice.task)
    const [compDataLenght, setCompDataLength] = useState(0)

    useEffect(() => {
        let compData = taskData.filter((item) => {
            if (item.completed === true) {
                return item;
            }
        })
        setCompDataLength(compData.length)
    }, [taskData])



    return (
        <>
            {/* <Text>Task</Text> */}
            <FlatList
               style= {Styles.FlatListStyle}
                data={taskData}
                renderItem={({ item }) => {
                    return (
                        !item.completed &&
                        <View style={Styles.dataView}>
                            <CheckBox
                                style={Styles.CheckBox}
                                onClick={() => compHandler(item)}
                                isChecked={item.completed}

                            />
                            <Text style={Styles.dataText}>{item.task}</Text>
                            <TouchableOpacity style={Styles.delBtn} onPress={() => deleteHandler(item)}>
                                <Icon name="trash" size={22} color="#fb5607" />
                            </TouchableOpacity>
                        </View>
                    )

                }}
                keyExtractor={item => item.UID}
            />

            {compDataLenght ? <Text style={Styles.compText}>Completed Task</Text>: null}
            <FlatList
                data={taskData}
                renderItem={({ item }) => {
                    return (
                        item.completed &&
                        <View style={Styles.dataView}>
                            <CheckBox
                                style={Styles.CheckBox}
                                onClick={() => compHandler(item)}
                                isChecked={item.completed}

                            />
                            <Text style={Styles.dataText}>{item.task}</Text>
                            <TouchableOpacity style={Styles.delBtn} onPress={() => deleteHandler(item)}>
                                <Icon name="trash" size={22} color="#fb5607" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={item => item.UID}
            />




        </>

    )
}
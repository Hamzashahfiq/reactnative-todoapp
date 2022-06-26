import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box'
import { useSelector } from 'react-redux';
import ActivityLoader from '../activityLoader/ActivityLoader';
import useCompData from './useCompData';
import Styles from './CompDataStyle';

export default function CompData({ taskUpdatedHandler }) {
    const { deleteHandler, compHandler, deleteDataLoading,
        deleteUID, updateDataLoading, updatedUID, } = useCompData();
    const taskData = useSelector((store) => store.TodoSlice.task)



    return (
        <>

            <FlatList
                data={taskData}
                renderItem={({ item }) => {
                    return (
                        item.completed &&
                        <View style={Styles.dataView}>
                            {updateDataLoading &&
                                updatedUID === item.UID ?
                                <ActivityLoader color='black' /> :
                                <CheckBox
                                    style={Styles.CheckBox}
                                    onClick={() => compHandler(item)}
                                    isChecked={item.completed}

                                />}
                            <Text style={{ ...Styles.dataText, textDecorationLine: 'line-through' }}>{item.task}</Text>

                            {/* <TouchableOpacity style={Styles.delBtn2} onPress={() => taskUpdatedHandler(item)}>
                                <Icon name="pencil" size={22} color="#ffb703" />
                            </TouchableOpacity> */}
                            {deleteDataLoading &&
                                deleteUID === item.UID ?
                                <TouchableOpacity style={Styles.delBtn} >
                                    <ActivityLoader />
                                </TouchableOpacity> :
                                <TouchableOpacity style={Styles.delBtn} onPress={() => deleteHandler(item)}>
                                    <Icon name="trash" size={22} color="#fb5607" />
                                </TouchableOpacity>}
                        </View>
                    )
                }}
                keyExtractor={item => item.UID}
            />
        </>

    )
}
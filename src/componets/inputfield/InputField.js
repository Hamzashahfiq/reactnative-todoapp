import { TextInput } from 'react-native'
import React from 'react'
import Styles from './InputFieldStyle'

export default function InputField({ task, onPressText,onKeyHandler }) {
    return (
        <TextInput
            value={task}
            onChangeText={(e)=> onPressText(e)}
            style={Styles.inputField}
            placeholder="Input Task"
            onSubmitEditing={ onKeyHandler}
        />
    )
}
// value={task}
// onChange(e.target.value)
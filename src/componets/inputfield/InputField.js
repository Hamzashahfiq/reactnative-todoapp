import { TextInput } from 'react-native'
import React from 'react'
import Styles from './InputFieldStyle'

export default function InputField({ task, onPressText,onKeyHandler,customStyle,placeHolder,inputType }) {
    return (
        <TextInput
            value={task}
            onChangeText={(e)=> onPressText(e)}
            style={[Styles.inputField, customStyle]}
            placeholder={placeHolder || "Input Task"}
            onSubmitEditing={ onKeyHandler}
            secureTextEntry ={inputType}
        />
    )
}
// value={task}
// onChange(e.target.value)
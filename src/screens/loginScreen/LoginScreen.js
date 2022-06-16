import { View, Text, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Styles from './LoginScreenStyle'
import InputField from '../../componets/inputfield/InputField'

export default function LoginScreen() {
    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.backgroudImage} source={require('../../assets/loginbackgroundImage.jpg')} resizeMode='cover'>
                <KeyboardAvoidingView>
                    <View style={Styles.loginInput1}>
                        <InputField />
                        <InputField />
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>

        </View>
    )
}
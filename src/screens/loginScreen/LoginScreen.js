import { View, Text, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, Alert } from 'react-native'
import React from 'react'
import Styles from './LoginScreenStyle'
import InputField from '../../componets/inputfield/InputField'
import TouchButton from '../../componets/touchButton/TouchButton'
import useLoginScreen from './useLoginScreen'
import ActivityLoader from '../../componets/activityLoader/ActivityLoader'
import SignUp from '../signUp/SignUp'
import { useDispatch,useSelector } from 'react-redux'

export default function LoginScreen() {
    const { loginHandler, userDtl, setUserName, setPassword, logBtnLoading,setScreenSignUp,isSignUp } = useLoginScreen();
    const dispatch = useDispatch()
    return(
    <>
    {
        isSignUp ? <SignUp /> :
            (

                <View style={Styles.container}>
                    <ImageBackground style={Styles.backgroudImage} source={require('../../assets/loginbackgroundImages.jpg')} resizeMode='cover'>
                        <ScrollView>
                            <KeyboardAvoidingView>
                                <View style={Styles.loginInput1}>
                                    <Image
                                        style={Styles.loginimage}
                                        source={require('../../assets/loginImage.png')} />
                                    <InputField placeHolder={'User Name'} onPressText={setUserName} task={userDtl.userName} customStyle={{ marginBottom: 30, maxHeight: 55, maxWidth: 320, minWidth: 320, backgroundColor: '#f8edeb', borderWidth: 1 }} />
                                    <InputField inputType={true} onPressText={setPassword} placeHolder={'Password'} task={userDtl.password} customStyle={{ maxHeight: 55, maxWidth: 320, minWidth: 320, backgroundColor: '#f8edeb', borderWidth: 1 }} />
                                    {logBtnLoading ? <TouchButton btnName={<ActivityLoader />} /> :
                                        <TouchButton btnName={'Login'} pressButton={() => loginHandler()} />}

                                </View>
                                <View style={Styles.register}>
                                    <Text style={Styles.registerText}>New to Logistics?</Text>
                                    <TouchableOpacity
                                        onPress={() => dispatch(setScreenSignUp(true))}>
                                        <Text style={Styles.registerBtn}>Register</Text>
                                    </TouchableOpacity>
                                </View>

                            </KeyboardAvoidingView>
                        </ScrollView>
                    </ImageBackground>

                </View>
            )
    }</>)
}
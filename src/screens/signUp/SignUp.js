import { View, Text, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button } from 'react-native'
import React from 'react'
import Styles from './SignUpStyle'
import InputField from '../../componets/inputfield/InputField'
import TouchButton from '../../componets/touchButton/TouchButton'
import useSignUp from './useSignUp'
import ActivityLoader from '../../componets/activityLoader/ActivityLoader'
import { useDispatch,useSelector } from 'react-redux'


export default function SignUp() {
    const { loginHandler, userDtl, setUserName, setPassword, logBtnLoading,setScreenSignUp } = useSignUp();
    const dispatch = useDispatch()
    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.backgroudImage} source={require('../../assets/signupImage.jpg')} resizeMode='cover'>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <View style={Styles.loginInput1}>
                         
                            <Image
                                source={require('../../assets/loginImage.png')} />
                            <InputField placeHolder={'User Name'} onPressText={setUserName} task={userDtl.userName} customStyle={{ marginBottom: 30, maxHeight: 55, maxWidth: 320, minWidth: 320, backgroundColor: '#f8edeb', borderWidth: 1 }} />
                            <InputField inputType={true} onPressText={setPassword} placeHolder={'Password'} task={userDtl.password} customStyle={{ maxHeight: 55, maxWidth: 320, minWidth: 320, backgroundColor: '#f8edeb', borderWidth: 1 }} />
                            {logBtnLoading ? <TouchButton btnName={<ActivityLoader />} /> :
                                <TouchButton btnName={'Login'} pressButton={() => loginHandler()} />}

                        </View>
                        <View style={Styles.register}>
                            <Text style={Styles.registerText}>join us befor ?</Text>
                            <TouchableOpacity
                            
                                onPress={() => dispatch(setScreenSignUp(false))}>
                                <Text style={Styles.registerBtn}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>

        </View>
    )
}
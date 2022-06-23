import { View, Text, ImageBackground, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import Styles from './LoginScreenStyle'
import InputField from '../../componets/inputfield/InputField'
import TouchButton from '../../componets/touchButton/TouchButton'
import useLoginScreen from './useLoginScreen'
import ActivityLoader from '../../componets/activityLoader/ActivityLoader'


export default function LoginScreen({ navigation }) {
    const { loginHandler, userDtl, setUserName, setPassword, logBtnLoading} = useLoginScreen();
    return (
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
                            {logBtnLoading ? <TouchButton btnName={<ActivityLoader />}  />:
                            <TouchButton btnName={'Login'} pressButton={() => loginHandler(navigation)} />}
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>

        </View>
    )
}
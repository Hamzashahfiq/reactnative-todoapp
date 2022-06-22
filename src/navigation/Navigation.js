import { View, Text } from 'react-native'
import React from 'react'
import Task from '../screens/task/Task';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/splashScreen/SplashScreen';

export default function Navigation() {
    const Stack = createNativeStackNavigator();
    const isLogin = useSelector((store) => store.TodoAuthSlice.isLogin)
    console.log(isLogin)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="spalsh" screenOptions={{
                headerStyle: {
                    backgroundColor: '#344e41',
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }}>

                {isLogin ? (
                    // Screens for logged in users
                    <Stack.Group>
                        <Stack.Screen name="task" component={Task} options={{ title: 'Task' }} />

                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group >
                        <Stack.Screen name="login" component={LoginScreen}  options={{ title: 'Login', headerLeft: () => <></> }} />
                        <Stack.Screen name="spalsh" component={SplashScreen} options={{ headerShown: false }} />
                    </Stack.Group>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}
import { View, Text } from 'react-native'
import React from 'react'
import Task from '../screens/task/Task';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{
                    headerStyle: {
                        backgroundColor: '#123213',
                    },
                }}>
                <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="task" component={Task} options={{ title: 'Task' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
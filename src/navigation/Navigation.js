import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Task from '../screens/task/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedTask from '../screens/completedTask/CompletedTask';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogout } from '../store/TodoAuthSlice';
import ActivityLoader from '../componets/activityLoader/ActivityLoader';





export default function Navigation() {
    const [taskLength, setTaskLength] = useState('')
    const [compTaskLength, setCompTaskLength] = useState('')
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const task = useSelector((store) => store.TodoSlice.task)
    const dispatch = useDispatch()
    const [logoutLoading, setLogoutLoading] = useState(false)


    useEffect(() => {
        let taskData = task.filter((item) => item.completed === false)
        setTaskLength(taskData.length)
        let compTaskData = task.filter((item) => item.completed === true)
        setCompTaskLength(compTaskData.length)
    })


    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {


                        if (route.name === 'task') {
                            return <Icon name="list" size={size} color={color} />
                        } else if (route.name === 'completed') {
                            return <Icon name="check" size={size} color={color} />
                        }

                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: {
                        backgroundColor: '#344e41',
                    },
                    headerTitleStyle: {
                        color: 'white'

                    },
                    headerRight: () => (
                        logoutLoading ? <ActivityLoader color = 'white'/> :
                        < TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => dispatch(checkLogout({setLogoutLoading}))}
                        >
                            <Icon name="sign-out"  color='white' size={25} />
                        </TouchableOpacity>
                        )

                })}>
                <Tab.Screen name="task" component={Task} options={{ title: 'Task', tabBarBadge: `${taskLength}` }} />
                <Tab.Screen name="completed" component={CompletedTask} options={{ title: 'Completed', tabBarBadge: `${compTaskLength}` }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


{/* //     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="task" screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#344e41',
//                 },
//                 headerTitleStyle: {
//                     color: 'white'
//                 }
//             }}>
//                 <Stack.Screen name="task" component={Task} options={{ title: 'Task' }} />
                
                
            

//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// } */}



import React, { useState, useEffect } from 'react'
import { Store } from './src/config/Store'
import { Provider } from 'react-redux'
import Navigation from './src/navigation/Navigation'
import auth from '@react-native-firebase/auth';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import SplashScreen from './src/screens/splashScreen/SplashScreen';



export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <SplashScreen />;



  return (
    <Provider store={Store}>
      {!user ? <LoginScreen />:<Navigation/> }
    </Provider>

  )
}
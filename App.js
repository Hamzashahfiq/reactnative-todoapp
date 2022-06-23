import React from 'react'
import { Store } from './src/config/Store'
import { Provider, useDispatch } from 'react-redux'
import Navigation from './src/navigation/Navigation'
import { fatchCurrentUser } from './src/store/TodoAuthSlice'


export default function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fatchCurrentUser())
  // }, [])


  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>

  )
}
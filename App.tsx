import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import ProfileScreen from './components/ProfileScreen'
import Useeffectexample from './components/Useeffectexample'
import { stylesProfile } from './components/styles'
import Login from './components/Login';
import FlastListExample from './components/FlastListExample'
import FlastListCallbackend from './components/FlastListCallbackend'
import NewsApp from './components/NewsApp'

const App = ():React.JSX.Element => {

  return (
    <View>
      {/* <FlastListCallbackend/> */}
      <NewsApp/>
    </View>
  );
};

export default App
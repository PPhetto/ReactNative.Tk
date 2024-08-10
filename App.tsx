import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import ProfileScreen from './components/ProfileScreen'
import Useeffectexample from './components/Useeffectexample'
import { stylesProfile } from './components/styles'
import Login from './components/Login';

const App = ():React.JSX.Element => {

  return (
    <View>
      <ProfileScreen/>
      <Login/>
      {/* <Useeffectexample/> */}
    </View>
  );
};

export default App
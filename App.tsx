import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import ProfileScreen from './components/ProfileScreen'
import Useeffectexample from './components/Useeffectexample'
import { stylesProfile } from './components/styles'
import Login from './components/Login';
import FlastListExample from './components/FlastListExample'
import FlastListCallbackend from './components/FlastListCallbackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'

const App = ():React.JSX.Element => {

  return (
    <View>
      {/* <FlastListCallbackend/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  );
};

export default App
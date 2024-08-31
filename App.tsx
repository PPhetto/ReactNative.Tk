import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from './screens/PostScreen';

const App = ():React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen}/>
        <HomeStack.Screen name='Post' component={PostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App
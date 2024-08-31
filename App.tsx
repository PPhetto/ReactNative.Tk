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
      <HomeStack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'#20b2aa'},
        headerTintColor:'white',
        headerTitleStyle:{fontWeight:'bold'}
      }}
      >
        <HomeStack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
        />
        <HomeStack.Screen 
        name='About' 
        component={AboutScreen}
        // options={{title: 'เกี่ยวกับเรา',
        //   headerStyle: {backgroundColor:'#20b2aa'},
        //   headerTintColor:'White',
        //   headerTitleStyle:{fontWeight:'bold'},
        //   headerTitleAlign:'center'
        // }}
        />
        <HomeStack.Screen name='Post' component={PostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App
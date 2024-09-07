// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import ProductScreen from './screens/ProductScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from './screens/PostScreen';
import {createDrawerNavigator} from "@react-navigation/drawer";

const HomeStack = createNativeStackNavigator();
const ProducStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStrackScreen(){
  return(
    <HomeStack.Navigator 
    initialRouteName='Home'
    screenOptions={{
      headerStyle:{backgroundColor:'#ffffff'},
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
  )
}

function ProducStackScreen(){
  return(
    <ProducStack.Navigator 
    initialRouteName='Home'
    screenOptions={{
      headerStyle:{backgroundColor:'#ffffff'},
      headerTintColor:'white',
      headerTitleStyle:{fontWeight:'bold'}
    }}
    >
      <ProducStack.Screen 
      name='Products' 
      component={ProductScreen}
      options={{title: 'หน้าหลัก'}}
      />
      <ProducStack.Screen name='Post' component={PostScreen}/>
    </ProducStack.Navigator>
  )
}

const App = ():React.JSX.Element => {
  
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator  
          screenOptions={{headerShown: false}}
          drawerContent={props => <MenuScreen{...props}/>}
          >
            <Drawer.Screen name='HomeStack' component={HomeStrackScreen}/>
            <Drawer.Screen name='ProducStack' component={ProducStackScreen}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App
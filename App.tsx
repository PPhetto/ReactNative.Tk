import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default function App():React.JSX.Element {

  const onClickme = ()=>{
    Alert.alert("hi", "React Native is Fun!!");
  }

  const users = [
    {id:1001,name:'John'},
    {id:1002,name:'Marry'}
  ]

  return (
    <View style={styles.container}>
      <AppHeader title='this is Header' year={2018}/>
      <AppHeader title='this header'/>
      <Text>Github can't Pushhhhhhhhh!</Text>
      { users.map((data,index)=>{
        return(
          <Text key={data.id}>
            No. {index+1} ID: {data.id} Name: {data.name}

          </Text>

        )
      })}
      <Button title="click me" 
      onPress={onClickme}
      color="blue"
      /* onPress={() => { Alert.alert("hi", "React Native is Fun!!"); }} */ 
      />
      <StatusBar style="auto" />
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

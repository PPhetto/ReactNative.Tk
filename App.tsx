import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import AppHeader from "./components2/AppHeader2";
import Content from "./components2/Content2";
import AppFooter from "./components2/AppFooter2";
import { stylesPractice } from "./Styles/Styles2";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('Message from App.tsx');
  const [footerMessage, setFooterMessage] = useState('Thai-Nichi Institute of Technology')

  React.useEffect(()=>{
    console.log("Component has mounted");
  },[]);

  React.useEffect(()=>{
    console.log(`Fullname has change to : ${fullname}`)
  },[fullname])

  const handleButtonClick=()=>{
    Alert.alert("Hello",`Input your fullname : ${fullname}`)
  };

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message}/>
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick = {handleButtonClick} />
      <AppFooter footerMessage={footerMessage} />
      <TextInput
        style = {stylesPractice.input}
        placeholder = "Enter your fullname"
        value = {fullname}
        onChangeText = {setFullname}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
});

export default App;
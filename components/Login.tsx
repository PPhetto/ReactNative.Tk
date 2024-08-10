import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { stylesProfile } from '../components/styles'
import { styph } from './styles'

const Login = (): React.JSX.Element => {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const validateEmail = (email:string)=>{
    const RecheckEmail = /\S+@\S+\.\S+/
    return RecheckEmail.test(email);
  }

  // let TextCh="";
  // const handleSubmit = () => {
  //   if(!name && !email){
  //     Alert.alert("Error","Please Enter Name\nPlease Enter Email",[{text:"OK"}])
  //     return;
  //   }
  //   if(!name){
  //     Alert.alert("Alert","Please Enter Name",[{text:"OK"}]);
  //     return;
  //   }
  //   if(!email){
  //     Alert.alert("Alert","Please Enter Email",[{text:"OK"}])
  //     return;
  //   }else if(!validateEmail(email)){
  //     Alert.alert("Error","Invalid Email Format",[{text:"OK"}])
  //   }
  //   if(!password){
  //     Alert.alert("Error","Please Enter Password",[{text:"OK"}])
  //   }else if(password.length<6){
  //     Alert.alert("Error","Password must be at lease 6 Characters",[{text:"OK"}])
  //   }else{
  //     Alert.alert("Alert","Success",[{text:"OK"}]);
  //   }
  //   // Alert.alert("Alert","Success",[{text:"OK"}]);
  // }

  return (
    <View style={stylesProfile.container2}>
      <TextInput
        style={stylesProfile.input}
        placeholder="Enter Name"      
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesProfile.input}
        placeholder="Enter Email"       
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {/* <TextInput
        style={stylesProfile.input}
        placeholder="Enter Password"     
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /> */}
      <View >
        <Button title="SUBMIT"/>
      </View>
    </View>
  )
}

export default Login
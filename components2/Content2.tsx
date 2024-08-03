import React from "react";
import { View, Text, Button, Alert} from "react-native";
import { stylesPractice } from '../Styles/Styles2';

interface ContentProps {
  message: string;
  //fullname: string;
  onButtonClick:() => void;
}

const Content = ({ message, onButtonClick }: ContentProps): React.JSX.Element => {

  /* const [displayFullname,setDisplayFullname] = React.useState('');

   const handleButtonClick = () =>{
    setDisplayFullname(fullname);
    Alert.alert("Hello",`Input your fullname : ${fullname}`)
  } */
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      <Button title="Click Me" onPress={onButtonClick}/>
    </View>
  );
};

export default Content;
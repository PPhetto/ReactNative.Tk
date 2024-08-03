import { View, Text, Button } from 'react-native'
import React from 'react'

const Useeffectexample = ():React.JSX.Element => {
    const[count1,setcount1] = React.useState(0);
    const[count2,setcount2] = React.useState(0);

    React.useEffect(()=>{
        console.log("Use Effect1 - Runs after every render")
    });
    React.useEffect(()=>{
        console.log("Use Effect2 - Runs only when count1 change")
    },[count1]);
    
    React.useEffect(()=>{
        console.log("Use Effect3 - Runs olny once the first render")
    },[]);

  return (
    <View style={{ marginTop: 50}}>
      <Text style={{marginTop: 50 }}>Count1: {count1}</Text>
      <Button title='Increment Count1' onPress={() => setcount1(count1 + 1)} />
      <Text>{"\n\n"}</Text>
      <Text>Count2: {count2}</Text>
      <Button title='Increment Count2' onPress={() => setcount2(count2 + 1)} />
    </View>
  )
}

export default Useeffectexample
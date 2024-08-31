import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles2';

const PostScreen = ({navigation,route}:any):React.JSX.Element => {

    const [postText, setPostText] = React.useState("");

  return (
    <>
        <TextInput
        multiline
        placeholder="Tell something...?"
        style={{height: 200, padding: 10, backgroundColor:'White'}}
        value={postText}
        onChangeText={setPostText}
        />
        <Button 
        title="Done"
        onPress={() => {
            navigation.navigate({
                name: "Home",
                params: { post: postText},
            });
        }}
        />
    </>
  )
}

export default PostScreen
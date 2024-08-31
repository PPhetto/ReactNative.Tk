import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {

  const gotoAbout = () => {
    navigation.navigate('About', {
      companyName: 'Thai-Nichi Institute of Technology',
      companyID: 100
    });
  };

  const gotoPost = () => {
    navigation.navigate('Post');
  };

  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color='pink'/>
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
      <View style={styles.postContainer}>
        <Button
          title="CREATE POST"
          onPress={gotoPost}
        // onPress={() => navigation.navigate("gotoPost")}
        />
        <Text style={styles.postText}>Post:</Text>
        <Text style={styles.postContent}>{route.params?.post}</Text>
      </View>



    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue",
    fontWeight: "bold",
  },
});
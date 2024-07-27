import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles';

const ProfileScreen = ():React.JSX.Element => {

    const profileimage = require("../assets/j1.jpg");

  return (
    <View style={styles.container}>
        <View style={styles.profilecontainer}>
            <Image source={profileimage} style={styles.profileimage} />
            <Text style={styles.profilename}>Tanachot Ketsomboon</Text>
        </View>
    </View>
  )
}

export default ProfileScreen

// const styles = StyleSheet.create({
//     container:{
//         alignItems:"center",
//         padding:20,
//         backgroundColor:"white",
//     },
//     profileimage:{
//         borderRadius:50,
//         width:100,
//         height:100,
//         marginRight:20,
//     },
//     profilecontainer:{
//         flexDirection:"row",
//         alignItems:"center",
//         width:"100%",
//         padding:20,
//         borderRadius:10,
//         backgroundColor:"white",
//         elevation:5,
//         marginTop:50,
//     },
//     profilename:{
//         fontSize:18,
//         color:"blue",
//     },
// })
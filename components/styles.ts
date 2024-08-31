import { StyleSheet } from 'react-native';

const styph = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        backgroundColor:"white",
    },
    profileimage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:20,
    },
    profilecontainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        elevation:5,
        marginTop:50,
    },
    profilename:{
        fontSize:18,
        color:"red",
    },
})
const stylesProfile = StyleSheet.create({
        container2: {
        justifyContent: "center",
        padding: 20,
        marginTop: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 3,
        width: '100%',
    },
      input: {
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#f9f9f9",
    },
})
export { stylesProfile, styph };
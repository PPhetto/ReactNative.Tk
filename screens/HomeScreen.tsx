import { View, Button, StyleSheet, Alert } from 'react-native'
import React, {useLayoutEffect} from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AppLogo from '../components/AppLogo';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import { Text } from '@rneui/base';
import { useAppDispatch, useAppSelector } from '../redux-tolkit/hooks';
import { selectAuthState, setIsLogin } from '../auth/auth-sliec';
import { logout } from '../Services/auth-servise';

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(selectAuthState);
  const MaterialHeaderButton = (props: any) =>(
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:'หน้าหลัก',
      headerTitle:()=><AppLogo/>,
      headerTitleAlign:'center',
      headerLeft:()=>(
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title= "menu" iconName= "menu" onPress={()=>{
            navigation.openDrawer();
          }}/>
        </HeaderButtons>
      ),
      headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
        <Item title= "logout" iconName= "logout" onPress={async ()=>{
          await logout();
          dispatch(setIsLogin(false));
        }}/>
      </HeaderButtons>
      )
    });
  },[navigation]);

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
      {profile?(
        <>
         <Text h3> Welcome {profile.name} </Text>
         <Text>
          Email: {profile.email} ID: {profile.ig} Role: {profile.Role}
         </Text>
        </>
      ):null}
      <Button title="About us" onPress={gotoAbout} />
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
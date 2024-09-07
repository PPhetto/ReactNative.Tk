import { StyleSheet, Text, View, Alert } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductScreen = ({navigation}:any): React.JSX.Element => {

    const MaterialHeaderButton = (props: any) => (
        // the `props` here come from <Item ... />
        // you may access them and pass something else to `HeaderButton` if you like
        <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
    );

    useLayoutEffect(()=>{
        navigation.setOptions({
          title:'Product',

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
            <Item title= "logout" iconName= "logout" onPress={()=>{
              Alert.alert("Log out", "Close Menu")
            }}/>
          </HeaderButtons>
          )
        });
      },[navigation]);

    return (
        <View>
            
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})
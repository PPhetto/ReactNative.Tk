import { StyleSheet, Text, View, Alert, FlatList, ListRenderItem, ActivityIndicator } from 'react-native'
import React, {useCallback, useLayoutEffect, useState} from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { findAllProduct } from '../Services/product-service';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Badge, ListItem } from '@rneui/base';

const ProductScreen = ({navigation}:any): React.JSX.Element => {

    const MaterialHeaderButton = (props: any) => (
        // the `props` here come from <Item ... />
        // you may access them and pass something else to `HeaderButton` if you like
        <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
    );

    const [product, setProduct] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getProduct = async () => {
      try{
        setLoading(true);
        const response = await findAllProduct();
        setProduct(response.data.data);
      } catch (error:any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    useFocusEffect(
      useCallback(()=> {
        getProduct();
      }, [])
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

      const _renderItem:ListRenderItem<any> = ({item}) => {
        return(
          <>
          <ListItem bottomDivider onPress={()=>{
            navigation.navigate("Details", {
              id: item.id,
              title: item.title,
            })
          }}>
            <Avatar source={{ uri: item.picture }} size={50} rounded />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Badge value={item.view} status="success"/>
          </ListItem>
          </>
        );
      };

    return (
        <View>
            {/* <Text>{JSON.stringify(product)}</Text> */}
            <FlatList
              data={product}
              renderItem={_renderItem}
              keyExtractor={(item:any) => item.id.toString()}
              onRefresh={async()=>{await getProduct();}}
              refreshing = {loading}
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ListItem, Icon } from '@rneui/base'
import { useAppSelector } from '../redux-tolkit/hooks';
import { selectAuthState } from '../auth/auth-sliec';

const MenuScreen = ({ navigation }: any): React.JSX.Element => {
    const {profile} = useAppSelector(selectAuthState);
    return (
        <View>
            <Header
                barStyle="default"
                centerComponent={{
                    text: profile?"welcome, "+profile.name:"",
                    style: { color: "#fff" }
                }}
                containerStyle={{ width: "100%", height: 150 }}
            />
            <>
                <ListItem bottomDivider onPress={()=>{navigation.navigate('HomeStack')}}>
                    <Icon name="home" type="material-community" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>หน้าหลัก</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider onPress={()=>{navigation.navigate('ProducStack')}}>
                    <Icon name="star" type="material-community" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>สินค้า</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})
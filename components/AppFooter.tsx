import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = (): React.JSX.Element => {
    const hello = "hello tni footer"
    const hello2 = <Text>helo JSX</Text>;
    const islogin = true;
    return (
        <View>
            <Text style={styles.mytext}>{hello} Date:{new Date().toLocaleString()}</Text>
            {hello2}
            {islogin && <Text>Welcome boss</Text>}
            {
                islogin == true 
                ? <Text>Welcome Marry</Text>
                : <Text>plases login</Text>
            }
        </View>
    )
}

export default AppFooter

const styles = StyleSheet.create({
    mytext: {
        color: 'red'
    }
})
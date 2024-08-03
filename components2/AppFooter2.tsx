import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from './AppHeader2';
interface AppFooterProps {
  message: string;
};

const AppFooter = ({ message }: AppFooterProps): React.JSX.Element => {
    return (
      <View style={styles.appFooter}>
         <Text style={styles.text}>{message}</Text>
        </View>
      )
    }
    
    export default AppFooter
    
    const styles = StyleSheet.create({
        appFooter: {
            backgroundColor: '#f8f8f8',
            padding: 20,
            fontSize: 15,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          },
          text: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
          }
    })
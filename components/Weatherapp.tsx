import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import WeatherLondon from './WeatherLondon';
import WeatherBangkok from './WeatherBangkok';

const Weatherapp = () => {
    // const [weatherlondon, setWeatherlondon] = useState(false);
    // const [weatherbangkok, setWeatherbangok] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const toggleModal = (city : string) => {
        setSelectedCity(city);
        setModalVisible(true);
    };

    const renderWeatherComponent = () => {
        if (selectedCity === 'London') {
            return <WeatherLondon />;
        } else if (selectedCity === 'Bangkok') {
            return <WeatherBangkok />;
        }
        return null;
    };

  return (
    <View style={styles.centeredView}>
        <Text></Text>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>London</Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
            >
                <View style={styles.modalView}>
                    {renderWeatherComponent()}
                    <Text style={styles.modalText}></Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(!isModalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
    </View>
  )
}

export default Weatherapp

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    modalView: {
        margin: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
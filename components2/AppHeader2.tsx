import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface AppHeaderProps {
    title: string;
};
const AppHeader = ({ title }: AppHeaderProps): React.JSX.Element => {
    return (
        <View>
            <View style={styles.appHeader}>
                <Text style={styles.title}>Input your fullname</Text>
                <Text style={styles.subtitle}>{title}</Text>
            </View>
        </View>
    );
};

export default AppHeader

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: "#aec6cf",
        padding: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
    },
});
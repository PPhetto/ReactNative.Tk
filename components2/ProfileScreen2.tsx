import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

interface ContentProps {
    fullname: string;
};

const Content: React.FC<ContentProps> = ({ fullname }) => {
    const handlePress = () => {
        Alert.alert("Hello", "Tanachot Ketsomboon");
    };
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{fullname}</Text>
            <Button title="Click Me" onPress={handlePress} color="blue" />
        </View>
    );
};

export default Content
const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});
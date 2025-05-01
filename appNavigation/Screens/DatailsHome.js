import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Settings(){
    return (
        <View style={styles.container}>
            <Text style={styles.trxt}>AnotherDatailsHome</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    trxt: {
        fontSize: 100,
        fontWeight: 'bold', 
        color: '#fff',
    }


})
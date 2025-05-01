import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Settings(){
    return (
        <View style={styles.container}>
            <Text style={styles.trxt}>Users</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    trxt: {
        fontSize: 100,
        fontWeight: 'bold', 
        color: '#fff',
    }


})
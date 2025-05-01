import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function Settings(){
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'#1b2', flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.trxt}>Home</Text>
            <Button title="Go Details" onPress={()=>navigation.navigate("DatailsHome")}></Button>
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
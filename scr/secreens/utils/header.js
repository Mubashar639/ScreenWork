import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from "../../asset/logo.jpg"


export default () => {
    return (
        <View style={{
            backgroundColor: "rgb(54,54,54)",
            width: "100%", height: 70, display: "flex", alignItems: "center", justifyContent: "center"
        }} >
            <Image
                style={{ width: 60, height: 30 }}
                source={logo}
            />
        </View>
    )
}

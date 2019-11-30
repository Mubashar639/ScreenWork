import { StyleSheet, ImageBackground, Image } from 'react-native';

import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, View, Text, Button } from 'native-base';
export default () => {
    return (
        <View>
            <View style={[styles.contentB, {
                marginTop: 20,
            }]} >

                <Image style={{
                    width: 50, height: 50
                }}
                    source={require("../../asset/Notifications/Intersection142x.png")}>
                </Image>
                <View style={styles.bottomitems}>
                    <Image style={{
                        width: 200, height: 20
                    }}
                        source={require("../../asset/Notifications/Laurencejoinedexhibit2x.png")}>
                    </Image>
                    <Image resizeMode="contain" style={{
                        width: 200, height: 10, position: "absolute", left: "-33%", bottom: 0
                    }}
                        source={require("../../asset/Notifications/Infoodcategory13x.png")}>
                    </Image>

                </View>
                <Image resizeMode="contain" style={{
                    width: 80, height: 50,
                }}
                    source={require("../../asset/Notifications/Group112x.png")}>
                </Image>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 25,
    },
    imgBackground: {
        width: '100%',
        height: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
        padding: 10
    },
    contentB: {
        backgroundColor: 'white',
        height: 80,
        marginHorizontal: 2,
        flex: 3,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    bottomitems:
    {
        height: 30,

        // marginTop: 30,
        // padding: 2,
        flexDirection: "column",
        // paddingHorizontal: 30,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    innerItems:
    {
        // justifyContent: 'center',
        width: "100%",

        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: 'white',

    }

});


import { StyleSheet, ImageBackground, Image } from 'react-native';

import Imagecomponent1 from "../../asset/Notifications/keanu.png"
import Imagecomponent2 from "../../asset/Challengecompleted/MaskGroup18.png"


import NotificationItems from "../utils/notificationsItem"

import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, View, Text, Button } from 'native-base';
export default class Challengecomplet extends Component {
    state = {
        images: [
            Imagecomponent1,
            Imagecomponent2,
        ]
    }

    render() {
        return (
            <Container>
                <Content style={{
                    display: "flex", flex: 1,
                    backgroundColor: "rgba(255,105,180,.3)",
                }} >
                    <ImageBackground style={[styles.imgBackground, { height: 70, padding: 10 }]}
                        source={require('../../asset/Notifications/Rectangle4.png')}>
                        <Image style={{
                            width: 30, height: 30

                        }}
                            source={require("../../asset/Challengecompleted/arrow3x.png")}>
                        </Image>
                        <Image resizeMode="contain" style={{
                            zIndex: 100, paddingBottom: 10

                        }}
                            source={require("../../asset/Notifications/exhbt_Logo_white.png")}>
                        </Image>
                        <Image style={{
                            width: 30, height: 30
                        }}
                            source={require("../../asset/Notifications/settings_white2x.png")}>
                        </Image>
                    </ImageBackground>
                    <View style={styles.innerItems} >
                        <ImageBackground style={{
                            width: "100%", height: 70,
                            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"
                        }}
                            source={require("../../asset/Notifications/Rectangle53x.png")}>

                            <Image resizeMode="contain" style={{
                                width: 30, height: 30
                            }}
                                source={require("../../asset/curatepage2/rank_white2x.png")}>
                            </Image>
                            <Image resizeMode="contain" style={{
                                width: 200, height: 30
                            }}
                                source={require("../../asset/curatepage2/Curationrank39th3x.png")}>
                            </Image>
                        </ImageBackground>
                    </View>
                    <View>
                        <Image resizeMode="contain" style={{

                        }}
                            source={require("../../asset/curatepage2/MaskGroup16.png")}>
                        </Image>
                    </View>
                    <View style={{
                        backgroundColor: "black", width: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center", height: 150
                    }}>
                        <View style={{
                            width: "50%", flexDirection: "row",
                            display: "flex", alignItems: "center", justifyContent: "space-around", height: 150
                        }}>
                            <Image resizeMode="contain"
                                style={{ marginTop: 30, width: 30 }}

                                source={require("../../asset/curatepage2/hate.png")}>
                            </Image>
                            <View style={{
                                flexDirection: "column",
                                display: "flex", alignItems: "center", justifyContent: "center", height: 100
                            }}>
                                <Image resizeMode="contain" style={{

                                }}
                                    source={require("../../asset/curatepage2/Save.png")}>
                                </Image>
                                <Image resizeMode="contain" style={{
                                    width: 50, height: 50
                                }}
                                    source={require("../../asset/curatepage2/a.png")}>
                                </Image>
                            </View>
                            <Image
                                style={{ marginTop: 30, width: 30 }}
                                source={require("../../asset/curatepage2/Love.png")}>
                            </Image>
                        </View>
                    </View>
                </Content>

            </Container >
        );
    }
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
        alignItems: "center",
        justifyContent: "space-between"

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,

    },
    contentB: {
        backgroundColor: 'white',
        height: 80,
        marginHorizontal: 2,
        flex: 3,
        // marginBottom: 20,
        marginTop: 20,

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

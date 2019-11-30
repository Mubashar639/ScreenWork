

import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import Style from "../../asset/style.jpg"
import Food from "../../asset/food.js.jpg"
import Port from "../../asset/image.jpg"
import HeaderComponent from "../utils/header"


import React, { Component } from 'react';
import { Container, Header, Content, Item, Icon, Input } from 'native-base';
import { red } from 'ansi-colors';
export default class IconTextboxExample extends Component {
    state = {
        tintColor: "linear-gradient(-145deg, purple ,white)",
        items: [
            { iconName: Food, title: "food" },
            { iconName: Style, title: "porttrait" },
            { iconName: Port, title: "style" },



        ]
    }

    whenChange = (text) => {
        this.setState({ value: text })
    }
    login = (text) => {
        alert(text);
    }



    render() {
        const { items } = this.state
        return (
            <React.Fragment>
                <Container style={styles.containerA}>
                    <HeaderComponent />
                    <ImageBackground style={styles.imgBackground}
                        source={require('../../asset/gradiantLeft.jpg')}>
                        <Text style={{ color: "white", fontSize: 16 }}>
                            Curate
                         </Text>

                    </ImageBackground>
                    <Content style={{ display: "flex", flex: 1, backgroundColor: "rgba(255,105,180,.3)", paddingTop: 20 }}>

                        <View style={styles.contentB} >

                            <View style={styles.bottomitems}>
                                <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "black", fontSize: 18, paddingBottom: 12 }}>
                                        choose a category
                                </Text>
                                </View>
                                <View style={{
                                    display: "flex", justifyContent: "flex-start", flexWrap: "wrap",
                                    width: "75%",
                                    flexDirection: "row",
                                }}>
                                    {
                                        items.map((item, key) => {
                                            return <View key={key} style={styles.innerItems} >

                                                <ImageBackground style={{ width: "100%", height: "100%" }}
                                                    source={item.iconName}>

                                                </ImageBackground>
                                            </View>

                                        })
                                    }
                                </View>
                            </View>
                        </View>
                    </Content>
                </Container>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    inputS: {
        marginHorizontal: 20,
        marginLeft: 20,
        borderRadius: 4,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 100,
        bottom: -20,
    },
    containerA: {
        display: 'flex',
        flex: 1,

        flexDirection: 'column',

        alignItems: 'flex-start',
    },
    containerB: {
        display: 'flex',
        paddingTop: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    contentA: {
        padding: 20,
        backgroundColor: 'rgba(104,31,200,0.8)',
        padding: 0,
        height: 190,


    },
    contentB: {
        backgroundColor: 'white',
        height: "100%",
        flex: 3,
        paddingTop: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
        padding: 10
    },
    imgBackground: {
        width: '100%',
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    startt: {

        height: 50,

    },
    texthere: {
        fontSize: 24,
        color: "white",
    },
    bottomitems:
    {
        // marginTop: 30,
        flex: 1,
        // padding: 2,
        flexDirection: 'row',
        // paddingHorizontal: 30,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    endt: {

        marginLeft: 10,
        marginTop: 30
    },
    innerItems:
    {
        // justifyContent: 'center',
        width: 120,
        height: 120,
        margin: 3,
        borderRadius: 3,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }

});



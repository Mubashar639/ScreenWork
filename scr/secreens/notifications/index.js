
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
          <ImageBackground style={[styles.imgBackground, { height: 200, padding: 10 }]}
            source={require('../../asset/Notifications/keanu.png')}>
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
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
              source={require("../../asset/Challengecompleted/Rectangle5572x.png")}>
              <Text style={{ color: "white", fontSize: 20, marginLeft: "50%" }}>
                profile
                      </Text>
            </ImageBackground>
            <ImageBackground style={{
              width: "100%", height: 70
              , display: "flex", alignItems: "center", justifyContent: "center"
            }}
              source={require("../../asset/Challengecompleted/Rectangle5573x.png")}>
              <Text style={{ color: "white", fontSize: 20, marginRight: "50%", borderBottomColor: "white", borderBottomWidth: 3 }}>
                notifications
               </Text>
            </ImageBackground>
          </View>
          <NotificationItems />
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
    marginBottom: 20,
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


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
          <View style={{
            width: "100%", padding: 10, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center"

          }}
          >
            <Image resizeMode="contain" style={{
              width: "50%", height: 30
            }}
              source={require("../../asset/Profile/KeanuReeves3x.png")}>
            </Image>
            <Image resizeMode="contain" style={{
              width: "70%", height: 20
            }}
              source={require("../../asset/Profile/ThelastgreatactorSomewhereinLA2x.png")}>
            </Image>
            <View style={{ display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
              <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", }}>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/2nd.png")}>
                </Image>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/rank_black.png")}>
                </Image>

              </View>
              <Image resizeMode="contain" style={{
                height: 100, width: 5
              }}
                source={require("../../asset/Profile/Line4.png")}>
              </Image>
              <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", }}>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/580.png")}>
                </Image>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/coin_black.png")}>
                </Image>

              </View>
              <Image resizeMode="contain" style={{
                height: 100, width: 5
              }}
                source={require("../../asset/Profile/Line4.png")}>
              </Image>
              <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", }}>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/30-5.png")}>
                </Image>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/trophy_black.png")}>
                </Image>

              </View>
            </View>
          </View>


          <View style={{
            width: "100%", padding: 10, marginTop: 20, backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center"

          }}
          >
            <Image resizeMode="contain" style={{
              width: "50%", height: 30
            }}
              source={require("../../asset/Profile/Keanu’sgallery.png")}>
            </Image>

            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: 10, alignItems: "center", justifyContent: "center" }}>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection1.png")}>
                {/* food */}
                <Image resizeMode="contain" style={{
                  width: "50%", height: 30
                }}
                  source={require("../../asset/Profile/food.png")}>
                </Image>
              </ImageBackground>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection2.png")}>
                <Image resizeMode="contain" style={{
                  width: "50%", height: 30
                }}
                  source={require("../../asset/Profile/portait.png")}>
                </Image>
              </ImageBackground>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection3.png")}>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/City.png")}>
                </Image>
              </ImageBackground>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection4.png")}>
                <Image resizeMode="contain" style={{
                  width: "50%", height: 30
                }}
                  source={require("../../asset/Profile/Sport.png")}>
                </Image>
              </ImageBackground>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection5.png")}>
                <Image resizeMode="contain" style={{
                  width: "50%", height: 30
                }}
                  source={require("../../asset/Profile/Nature.png")}>
                </Image>
              </ImageBackground>
              <ImageBackground style={{
                height: 100, width: 100
                , display: "flex", alignItems: "center", margin: 1, justifyContent: "center"
              }}
                source={require("../../asset/Profile/Intersection6.png")}>
                <Image resizeMode="contain" style={{

                }}
                  source={require("../../asset/Profile/pets.png")}>
                </Image>
              </ImageBackground>
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

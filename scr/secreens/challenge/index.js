
import { StyleSheet, ImageBackground, Image } from 'react-native';

import Imagecomponent1 from "../../asset/Challengecompleted/MaskGroup7.png"
import Imagecomponent2 from "../../asset/Challengecompleted/MaskGroup18.png"



import HeaderComponent from "../utils/header"
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
        <HeaderComponent />

        <Content style={{
          display: "flex", flex: 1,
          backgroundColor: "rgba(255,105,180,.3)",
        }} >
          <ImageBackground style={styles.imgBackground}
            source={require('../../asset/myGallery/Rectangle.png')}>
            <Image style={{
              width: 40, height: 50
              , display: "flex", alignItems: "center", justifyContent: "center"
            }}
              source={require("../../asset/Challengecompleted/trophy_black.png")}>

            </Image>
            <Text style={{ color: "white", fontSize: 20, position: "absolute" }}>
              your defeat carrie!
             </Text>
          </ImageBackground>
          <ImageBackground style={[styles.imgBackground, { marginBottom: 20 }]}
            source={require('../../asset/Challengecompleted/Rectangle580.png')}>
            <Text style={{ color: "black", fontSize: 20, }}>
              10
               </Text>
            <Image style={{
              width: 30, height: 30
              , display: "flex", alignItems: "center", justifyContent: "center"
            }}
              source={require("../../asset/Challengecompleted/coin_black.png")}>

            </Image>
          </ImageBackground>
          <View style={styles.contentB} >

            <View style={styles.bottomitems}>


              <View style={styles.innerItems} >

                <ImageBackground style={{
                  width: "100%", height: 300
                  , display: "flex", alignItems: "center", justifyContent: "center",
                  flexDirection: "column"
                }}
                  source={Imagecomponent1}>
                  <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "45%" }}>
                    <Image style={{
                      width: 50, height: 50
                    }}
                      source={require("../../asset/Challengecompleted/MaskGroup19.png")}>
                    </Image>
                    <View style={{
                      display: "flex", flexDirection: "row",
                      justifyContent: "space-between", alignItems: "center"
                    }}>
                      <Text style={{ color: "white", fontSize: 50, marginLeft: "15%" }}>
                        250
                      </Text>
                      <Image style={{
                        width: 50, height: 50
                        ,
                      }}
                        source={require("../../asset/Challengecompleted/arrow-12x.png")}>
                      </Image>
                    </View>
                  </View>
                </ImageBackground>

                <ImageBackground style={{
                  width: "100%", height: 300
                  , display: "flex", alignItems: "center", justifyContent: "center"
                }}
                  source={Imagecomponent2}>
                  <View style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,.3)", marginRight: "45%", width: "54%", height: "100%"
                  }}>

                    <Image style={{
                      width: 50, height: 50
                      ,
                    }}
                      source={require("../../asset/Challengecompleted/MaskGroup20.png")}>
                    </Image>
                    <View style={{
                      display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "15%",
                      alignItems: "center"
                    }}>
                      <Image style={{
                        width: 50, height: 50
                        ,


                      }}
                        source={require("../../asset/Challengecompleted/arrow3x.png")}>
                      </Image>
                      <Text style={{ color: "white", fontSize: 50, }}>
                        390
                      </Text>
                    </View>
                  </View>

                </ImageBackground>
              </View>
            </View>
          </View>

        </Content>
        <View style={styles.innerItems} >
          <ImageBackground style={{
            width: "100%", height: 70,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
            source={require("../../asset/Challengecompleted/Rectangle5572x.png")}>
            <Text style={{ color: "white", fontSize: 20, marginLeft: "50%" }}>
              share
                      </Text>
          </ImageBackground>
          <ImageBackground style={{
            width: "100%", height: 70
            , display: "flex", alignItems: "center", justifyContent: "center"
          }}
            source={require("../../asset/Challengecompleted/Rectangle5573x.png")}>
            <Text style={{ color: "white", fontSize: 20, marginRight: "50%" }}>
              rematch
               </Text>
          </ImageBackground>
        </View>
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
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    padding: 10
  },
  contentB: {
    backgroundColor: 'white',
    height: "100%",
    marginHorizontal: 2,
    flex: 3,
    // paddingTop: 20,
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


import { StyleSheet, ImageBackground, Image } from 'react-native';

import Imagecomponent1 from "../../asset/myGallery/Intersection34.png"
import Imagecomponent2 from "../../asset/myGallery/Intersection35.png"
import Imagecomponent3 from "../../asset/myGallery/Intersection36.png"
import Imagecomponent4 from "../../asset/myGallery/Intersection37.png"
import Imagecomponent5 from "../../asset/myGallery/Intersection38.png"
import Imagecomponent6 from "../../asset/myGallery/Intersection39.png"


import HeaderComponent from "../utils/header"
import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, View, Text, Button } from 'native-base';
export default class IconTextboxExample extends Component {
  state = {
    images: [
      Imagecomponent1,
      Imagecomponent2,
      Imagecomponent3,
      Imagecomponent4,
      Imagecomponent5,
      Imagecomponent6,
    ]
  }

  render() {
    return (
      <Container>
        <HeaderComponent />
        <ImageBackground style={styles.imgBackground}
          source={require('../../asset/myGallery/Rectangle.png')}>
          <Text style={{ color: "white", fontSize: 16 }}>
            set up your gallery
                  </Text>

        </ImageBackground>
        <Content style={{
          display: "flex", flex: 1,
          backgroundColor: "rgba(255,105,180,.3)", paddingTop: 20
        }} >

          <View style={styles.contentB} >

            <View style={styles.bottomitems}>

              <View style={{
                display: "flex", justifyContent: "flex-start", flexWrap: "wrap",
                width: "75%",
                flexDirection: "row",
              }}>
                {
                  this.state.images.map((item, key) => {
                    return <View key={key} style={styles.innerItems} >

                      <ImageBackground style={{
                        width: "100%", height: "100%"
                        , display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                        source={item}>

                        <Image source={require("../../asset/myGallery/Symbol52.png")} />
                      </ImageBackground>
                    </View>

                  })
                }
              </View>
            </View>
          </View>
        </Content>

      </Container>
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
    paddingTop: 20,
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
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }

});

import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

const UILogo = (props) => {
  console.log(props);
  // set logo path dependent on what prop name was given
  var ImgSrc =
    props.src === "lock"
      ? require("../assets/iE-wdltA.png")
      : require("../assets/settings.png");
  console.log(ImgSrc);
  return (
    <View>
      <Image style={styles.logo} source={ImgSrc} />
    </View>
  );
};
//quick reminder: Button gehört zum Navigation Component. Touchable Opacity wär noch cool.
//UI Logo muss auch n eigenes Component sein

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 70,
  },
});

export default UILogo;

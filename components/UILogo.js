import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

const UILogo = (props) => {
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/iE-wdltA.png")} />
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

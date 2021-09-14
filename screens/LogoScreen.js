import React, { useState } from "react";
import { View, StyleSheet, Image, Alert, Pressable, Text } from "react-native";

import colors from "../constants/colors";

const LogoScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/bubble.jpg")} />

      <View style={styles.button}>
        <Pressable
          style={styles.button1}
          onPress={() => Alert.alert("am pressed omg")}
        >
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      </View>
    </View>
  );
};
//quick reminder: Button gehört zum Navigation Component. Touchable Opacity wär noch cool.
//Standard Button lässt sich nicht verändern. Müsste Pressable nehmen.
// <Button color={colors.accBlue} title={props.title} onPress={()=> Alert.alert('am pressed omg')}/>
const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
  button: {
    margin: 50,
    elevation: 5,
  },
  text: {
    color: colors.mainLG,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },

  button1: {
    borderRadius: 8,
    height: 40,
    elevation: 3,
    backgroundColor: colors.accBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 200,
  },
});

export default LogoScreen;

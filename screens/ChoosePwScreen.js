import React, { useState } from "react";
import { View, StyleSheet, Image, Alert, Pressable, Text } from "react-native";
import UILogo from "../components/UILogo";
import colors from "../constants/colors";
import Input from "../components/Input";

const ChoosePwScreen = (props) => {
  return (
    <View style={styles.imageBox}>
      <View>
        <UILogo src="lock" />
        <View style={styles.title}>
          <Text style={styles.text2}>Wähle ein Passwort</Text>
        </View>
        <Input />
      </View>

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
//UI Logo muss auch n eigenes Component sein
//scheinbar muss man das Image ding noch resizen mit nem extra.. DDing
//https://www.skptricks.com/2018/11/react-native-responsive-image-scale-to-fit-example.html
//Der button hat irgendwann seine default width vergessen wtf..

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 60,
    paddingVertical: 80,
    justifyContent: "space-between",
  },
  title: {
    color: colors.mainG,
    marginTop: 40,
    fontSize: 32,
    lineHeight: 36,
  },
  button: {
    elevation: 5,
    alignItems: "center",
  },
  text: {
    color: colors.mainLG,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },

  text2: {
    color: colors.mainG,
    fontSize: 20,
  },

  button1: {
    borderRadius: 8,
    height: 40,
    width: 80,
    elevation: 3,
    backgroundColor: colors.accBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChoosePwScreen;
/**
 * 
 *  <UILogo log={require("../assets/iE-wdltA.png")} />
 * Wollte die Source nich tnehmen :(

 */

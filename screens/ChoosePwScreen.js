import React, { useState } from "react";
import { View, StyleSheet, Image, Alert, Pressable, Text } from "react-native";
import UILogo from "../components/UILogo";
import colors from "../constants/colors";
import Input from "../components/Input";
/**
 *  ChoosePwScreen for Starters!
 *  takes the UILogo & Input Component.
 *
 *
 * ToDo: Navigation Bar
 * may find another solution for the marked Dates, it's just a dummy rn
 * also find a way to get the input outta it but that's prob. a diff issue
 *
 * @param {} props
 * @returns
 */
const ChoosePwScreen = (props) => {
  return (
    <View style={styles.imageBox}>
      <Image style={styles.logo} source={require("../assets/iE-wdltA.png")} />

      <View style={styles.container}>
        <View>
          <View style={styles.title}>
            <Text style={styles.text2}>Wähle ein Passwort</Text>
          </View>
          <Input />
          <View style={styles.button}>
            <Pressable
              style={styles.button1}
              onPress={() => Alert.alert("am pressed omg")}
            >
              <Text style={styles.text}>{props.title}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
//quick reminder: Button gehört zum Navigation Component. Touchable Opacity wär noch cool.
//https://www.skptricks.com/2018/11/react-native-responsive-image-scale-to-fit-example.html
//Der button hat irgendwann seine default width vergessen wtf..

const styles = StyleSheet.create({
  imageBox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 0.2,
    width: 60,
    height: 70,
  },
  logo: {
    width: 60,
    height: 70,
    resizeMode: "contain",
  },
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "60%",
    paddingTop: 50,
  },

  title: {
    color: colors.mainG,
    fontSize: 32,
    lineHeight: 36,
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

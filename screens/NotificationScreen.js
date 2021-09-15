import React, { useState } from "react";
import { View, StyleSheet, Image, Alert, Pressable, Text } from "react-native";
import UILogo from "../components/UILogo";
import colors from "../constants/colors";
import Input from "../components/Input";
//import * as content from "../constants/texts";
import TextWSwitch from "../components/TextWSwitch";

/**
 *  NotificationScreen for Starters!
 * takes the TextWSwitch Component.
 *
 * TODo Figure out how you can reuse the component and hand over the texts..
 *
 *
 * @param {} props
 * @returns
 */

const NotificationScreen = (props) => {
  return (
    
      <View style={styles.head}>
        <Text style={styles.title}>Benachrichtigungen</Text>
        <View style={styles.container}>
        <TextWSwitch />
        </View>
       
      </View>
  
  );
};

const styles = StyleSheet.create({
  head:{
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 60,
    paddingVertical: 80,
    justifyContent: 'flex-start',
  },
  container: {
  paddingVertical:20,
  },
  title: {
    color: colors.accBlue,
    marginTop: 40,
    fontSize: 30,
    lineHeight: 36,
  },
});

export default NotificationScreen;

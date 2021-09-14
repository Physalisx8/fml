import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";

/**
 * Password Input Component
 * maxLength currently at 6 - maybe numbers only? 
 * See TextInput Doc for further props
 *
 * 
 * ToDo: eventually lower the placeholder on the line, so it doesn't hover above it that awkwardly. 
 * Also when toggled/pressed change color mebbe..
 * 
 * @param {*} props
 * @returns Component
 */
const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Passwort"
        placeholderTextColor={colors.accBlue}
        maxLength={6}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Wiederholung"
        placeholderTextColor={colors.accBlue}
        maxLength={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "80%",
    justifyContent: "center",
  },

  input: {
    borderBottomColor: colors.mainG,
    borderBottomWidth: 2,
    width: 200,
    height: 50,
  },
});

export default Input;

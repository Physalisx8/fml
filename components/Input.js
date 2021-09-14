import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../constants/colors";

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
//quick reminder: Button gehört zum Navigation Component. Touchable Opacity wär noch cool.
//UI Logo muss auch n eigenes Component sein

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

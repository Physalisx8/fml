import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

/**
 * UILogo Component for two screens. 
 * 1 Lock Symbol and the preferences Screen.
 * @param {*} props 
 * @returns 
 */

const UILogo = (props) => {
  return (
    <View >
            <Image style={styles.logo} source={props.log}/>
    </View>
  );
};

const styles = StyleSheet.create({

  logo:{
    width: 60,
   height: 70,
  },
});

export default UILogo;

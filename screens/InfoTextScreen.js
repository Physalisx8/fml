import React, { useState } from "react";
import { View, StyleSheet, Image, Alert, Pressable, Text, ProgressBarAndroidBase } from "react-native";

import colors from "../constants/colors";


const InfoTextScreen = (props) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>{props.header}</Text>
        </View>
        
        <View style={styles.textBox}>
        <Text style={styles.text2}>Willkommen bei unserer App. Lorem IPSUM DOLOR. Brummli Brummli Brummli.  DAS MÜSSEN WÜR HÜBSCH MACHEN</Text>
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
//Standard Button lässt sich nicht verändern. Müsste Pressable nehmen.
// <Button color={colors.accBlue} title={props.title} onPress={()=> Alert.alert('am pressed omg')}/>´
// TO DO herausfinden wie man Textblöcke irgendwie cooler einbindet.... 
//ANDERE FONT? 
//AND WHYS oben n schwarzer Balken..

const styles = StyleSheet.create({
  container: {
    
    height: "100%",
    paddingTop: 50,
  },
  title:{
      color: colors.accBlue,
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
  textBox:{
      height: '60%',
      width: '80%',
      paddingTop: 20, 
  },

  text2:{
      color: colors.mainG,
      fontSize: 20, 
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

export default InfoTextScreen;

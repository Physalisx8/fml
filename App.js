import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./constants/colors";
import InfoTextScreen from "./screens/InfoTextScreen";
import LogoScreen from "./screens/LogoScreen";
import ChoosePwScreen from "./screens/ChoosePwScreen";
import CalendarScreen from "./screens/CalendarScreen";
import NotificationScreen from "./screens/NotificationScreen";

import * as content from "./constants/texts";


export default function App() {
  return (
    <View style={styles.container}>
     <Text>huhu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainLG,
    height: "100%",
  },
});

/**
<<<<<<< HEAD
 * Just Commentary Dump to test diff Screens with their props.
 * 
 *  <LogoScreen title='Press Me'/>
 * <NotificationScreen/>
 * <InfoTextScreen header="Hallo!" title="Weiter"/>
 * <ChoosePwScreen title="Weiter"/>
 *  <CalendarScreen
        header="Wann hattest du deine letzte Menstruation?"
        title="Weiter"
      />

 *
 */

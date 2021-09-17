import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./constants/colors";
import InfoTextScreen from "./screens/InfoTextScreen";
import LogoScreen from "./screens/LogoScreen";
import ChoosePwScreen from "./screens/ChoosePwScreen";
import CalendarScreen from "./screens/CalendarScreen";
import NotificationScreen from "./screens/NotificationScreen";
import MensCycleScreen from "./screens/MensCycleScreen";
import AddEntryScreen from "./screens/AddEntryScreen";

import * as content from "./constants/texts";
import ChangePWScreen from "./screens/ChangePWScreen";

/**
 * The MASTER APP.
 * We can do it! *peptalk*
 * Note: we still need an Navigation Component and the entire Logic
 *
 * @returns
 */
export default function App() {
<<<<<<< HEAD
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <CalendarScreen
        header="Wann hattest du deine letzte Menstruation?"
        title="Weiter"
      />
=======
     <Text>huhu</Text>
>>>>>>> b7f5f52 (NotificationScreen)
    </View>
  );
=======
  return <View style={styles.container}>
    <AddEntryScreen/>
  </View>;
>>>>>>> df7d898 (new screens, minor text fixes)
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
 *  <MensCycleScreen title= "Weiter"/>
 *  <LogoScreen title='Press Me'/>
 * <NotificationScreen/>
 * <InfoTextScreen header="Hallo!" title="Weiter"/>
 * <ChoosePwScreen title="Weiter"/>
 *  <CalendarScreen
        header="Wann hattest du deine letzte Menstruation?"
        title="Weiter"
      />
 * <ChangePWScreen title="ändern"/>
 */

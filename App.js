import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./constants/colors";
import InfoTextScreen from "./screens/InfoTextScreen";
import LogoScreen from "./screens/LogoScreen";
import ChoosePwScreen from "./screens/ChoosePwScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChoosePwScreen title="Weiter" />
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
 *   <LogoScreen title='Press Me'/>
 * <InfoTextScreen header="Hallo!" title="Weiter"/>
 *
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './constants/colors';
import InfoTextScreen from './screens/InfoTextScreen';
import LogoScreen from './screens/LogoScreen';
import ChoosePwScreen from './screens/ChoosePwScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <ChoosePwScreen title="Weiter"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainLG,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 *   <LogoScreen title='Press Me'/>
 * <InfoTextScreen header="Hallo!" title="Weiter"/>
 * 
 */
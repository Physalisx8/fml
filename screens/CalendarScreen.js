import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import colors from "../constants/colors";
import Calendar from "../components/Calendar";
/**
 * This is the Calendar Screen for Starters.
 * It holds the "When you had your last mens?" Question ft. the
 * Calendar component.
 *
 * ToDo: Navigation Bar
 * may find another solution for the marked Dates, it's just a dummy rn
 * also find a way to get the input outta it but that's prob. a diff issue
 *
 */
const CalendarScreen = (props) => {
  return (
    //props.header is given when calling the Screen
    <View style={styles.container}>
      <Text style={styles.title}>{props.header}</Text>

      <Calendar
        markingType={"period"}
        markedDates={{
          "2021-09-21": {
            startingDay: true,
            color: colors.primBlue,
            textColor: "white",
          },
          "2021-09-22": { color: colors.primBlue, textColor: "white" },
          "2021-09-23": { color: colors.primBlue, textColor: "white" },
          "2021-09-24": { color: colors.primBlue, textColor: "white" },
          "2021-09-25": {
            endingDay: true,
            color: colors.primBlue,
            textColor: "white",
          },
        }}
      />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 50,
  },

  title: {
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
  button1: {
    borderRadius: 8,
    height: 40,
    elevation: 3,
    backgroundColor: colors.accBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CalendarScreen;

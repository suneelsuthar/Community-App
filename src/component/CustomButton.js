import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress()}
      activeOpacity={0.5}
    >
      <Text style={styles._btn_text}>{props.title}</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE8312",
    height: 55.74,
    borderRadius: 100,
  },
  _btn_text: {
    color: "white",
    // fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "Metropolis_SemiBold",
  },
});

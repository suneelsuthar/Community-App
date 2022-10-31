import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("SplashPorcess");
    }, 2500);
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("./../../../assets/LogoFimon.png")} />
      <Text style={styles._created}>Created By</Text>
      <Text style={styles._by}>annotly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0093ED",
  },
  _created: {
    color: "#7DD8FF",
    fontFamily: "Metropolis_SemiBold",
    fontSize: 16,
  },
  _by: {
    color: "white",
    fontFamily: "Metropolis_SemiBold",
    fontSize: 16,
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
export default function SplashPorcess(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login");
      // go to Home page
    }, 2500);
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("./../../../assets/LogoFimon.png")} />
      <Image
        source={require("./../../../assets/Spin.gif")}
        style={{ height: 60, width: 60 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

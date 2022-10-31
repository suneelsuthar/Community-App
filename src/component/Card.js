import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
export default function Card({ path }) {
  console.log(path);
  return (
    <View style={styles.container}>
      <View style={styles._square}>
        <Image source={require("./../../assets/vector.png")} />
      </View>
      <View style={styles._post_Detail}>
        <Text style={styles._post_title}>Post title</Text>
        <Text style={styles._post_Desc}>Post description</Text>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: "row",
  },
  _post_title: {
    color: "#7DD8FF",
    fontFamily: "Metropolis_SemiBold",
  },
  _post_Desc: {
    fontFamily: "Metropolis_SemiBold",

    color: "#D6F5FF",
  },
  _post_img: {
    flex: 1,
    resizeMode: "cover",
    height: 186,
    width: windowWidth / 2.3,
  },
  _square: {
    backgroundColor: "#D6F5FF",
    borderRadius: 16,
    height: 72,
    width: 71,
    justifyContent: "center",
    alignItems: "center",
  },
  _post_Detail: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
});

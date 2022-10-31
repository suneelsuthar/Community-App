import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { PostUserIcon, ShareIcon } from "./../../assets/svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
export default function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles._header}>
        <PostUserIcon color="red" />
        <View>
          <Text style={styles._title}>Post title</Text>
          <Text style={styles._desc}>Post description</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PostDetails")}
        activeOpacity={0.5}
      >
        <Image
          source={require("./../../assets/LargeImage.png")}
          style={styles._place_holder}
        />
      </TouchableOpacity>
      <View style={styles._footer}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={24}
          color="#0093ED"
        />
        <MaterialIcons name="keyboard-arrow-down" size={30} color="#0093ED" />
        <MaterialCommunityIcons
          name="pencil-outline"
          size={24}
          color="#0093ED"
        />
        <ShareIcon color="red" />
        <Octicons name="plus" size={24} color="#0093ED" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#D6F5FF",
  },
  _btn_text: {
    color: "white",
    // fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "Metropolis_SemiBold",
  },
  _footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  _header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  _place_holder: {
    width: "100%",
  },
  _title: {
    fontFamily: "Metropolis_SemiBold",
    color: "#0072B1",
    marginLeft: 10,
  },
  _desc: {
    fontFamily: "Metropolis_SemiBold",
    color: "#7DD8FF",
    marginLeft: 10,
  },
});

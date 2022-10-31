import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { ShareIcon } from "./../../../assets/svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";

export default function PostDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles._header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={24} color="#0093ED" />
        </TouchableOpacity>
        <View style={styles._header_title}>
          <Text style={styles._title}>Post Details</Text>
        </View>
      </View>

      <View style={styles._map_area}>
        {/* <PlaceholderImage color="red" /> */}
        <MapView style={styles.map} />
      </View>
      {/* <Text style={styles._btn_text}>{props.title}</Text> */}
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
        <MaterialIcons name="send" size={24} color="#0093ED" />
        <Octicons name="plus" size={24} color="#0093ED" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: "#D6F5FF",
    flex: 1,
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
    backgroundColor: "white",
  },
  _header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    paddingVertical: 20,
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
  _header_title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
  _map_area: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

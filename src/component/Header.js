import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  ProfileIcon,
  ListIcon,
  StarIcon,
  MessageIcon,
} from "./../../assets/svg";
export default function Header(props) {
  console.log(props.title);
  // listIcon={true}
  // userIcon={true}
  // starIcon={false}
  // messageIcon={false}
  // searchBar={true}
  // title
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles._back_icon, { borderColor: props.color }]}
      >
        {props.userIcon && <ProfileIcon color="#0093ED" />}
      </TouchableOpacity>

      {props.title ? (
        <Text style={styles._screen_title}>{props.title}</Text>
      ) : null}
      {props.searchBar && (
        <View style={styles._search_container}>
          <FontAwesome name="search" size={24} color="#0093ED" />
          <TextInput style={styles._text_input} placeholder="Search.." />
        </View>
      )}

      {props.starIcon && (
        <TouchableOpacity style={{ marginHorizontal: 7 }}>
          <StarIcon color="#0093ED" />
        </TouchableOpacity>
      )}

      {props.listIcon && (
        <TouchableOpacity>
          <ListIcon color="#0093ED" />
        </TouchableOpacity>
      )}

      {props.messageIcon && (
        <TouchableOpacity>
          <MessageIcon color="#0093ED" />
        </TouchableOpacity>
      )}

      {/* {props.title && (
        <View style={styles._title_row}>
          <Text
            style={[
              styles._header_title,
              { color: props.color ? props.color : "black" },
            ]}
          >
            {" "}
            {props.title}
          </Text>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingVertical: 13,
    marginTop: 30,
  },
  _title_row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _back_icon: {
    borderRadius: 100,
    backgroundColor: "#D6F5FF",
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  _header_title: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Metropolis_SemiBold",
  },
  _search_container: {
    borderWidth: 2,
    borderColor: "#0093ED",
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    // padding:1
  },
  _text_input: {
    flex: 1,
    padding: 4,
  },
  _screen_title: {
    fontFamily: "Metropolis_SemiBold",
    color: "#0093ED",
    textAlign: "left",
    flex: 1,
    paddingLeft: 10,
    fontSize: 18,
  },
});

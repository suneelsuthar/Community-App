import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Card } from "../../component";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "./../../component";

export default function Report(props) {
  const [search, setsearch] = useState("");

  const reports = [
    {
      id: "1",
      title: "Post title",
      desc: "Post description",
    },
    {
      id: "2",
      title: "Post title",
      desc: "Post description",
    },
    {
      id: "3",
      title: "Post title",
      desc: "Post description",
    },
    {
      id: "4",
      title: "Post title",
      desc: "Post description",
    },
    {
      id: "5",
      title: "Post title",
      desc: "Post description",
    },

    {
      id: "6",
      title: "Post title",
      desc: "Post description",
    },
    {
      id: "7",
      title: "Post title",
      desc: "Post description",
    },
  ];

  const filterArr = reports.filter((v) => {
    return v.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        listIcon={true}
        userIcon={true}
        starIcon={true}
        messageIcon={false}
        searchBar={false}
        title={"Reports"}
      />
      <View style={styles._inner_section}>
        <View style={styles.searchSection}>
          <AntDesign
            name="search1"
            size={24}
            style={styles.searchIcon}
            color="#0093ED"
          />
          <TextInput
            style={styles.input}
            placeholder="Search ..."
            underlineColorAndroid="transparent"
            value={search}
            onChangeText={(search) => setsearch(search)}
          />
        </View>

        <ScrollView>
          <View style={styles._posts_row}>
            {filterArr.length !== 0 ? (
              filterArr.map((val, i) => {
                return (
                  <Card data={val} key={i} navigation={props.navigation} />
                );
              })
            ) : (
              <Text>Loading ...</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 14,
    overflow: "hidden",
    height: 55,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#0093ED",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "white",
    color: "#424242",
  },
  _posts_row: {
    padding: 10,
    paddingBottom: 160,
    flex: 1,
  },
  _inner_section: {
    padding: 10,
  },
});

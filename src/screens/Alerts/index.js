import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Post, Header } from "./../../component";

export default function Alerts(props) {
  const labels = ["Label", "Label", "Label", "Label"];
  const posts = [
    {
      id: "1",
    },
    {
      id: "2",
    },

    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        listIcon={false}
        userIcon={true}
        starIcon={false}
        messageIcon={true}
        searchBar={true}
        title={false}
      />
      {/* TOP BANNER SECTION */}
      <View style={styles._label_view}>
        {labels.length !== 0 ? (
          labels.map((val, i) => {
            return (
              <View style={styles._label} key={i}>
                <Text style={styles._label_text}>{val}</Text>
              </View>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      {/*   TABLE */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map((val, i) => {
          return <Post key={i} data={val} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 15,
  },
  _label: {
    backgroundColor: "#0072B1",
    borderRadius: 100,
    margin: 5,
    elevation: 5,
    padding: 6,
    paddingHorizontal: 11,
  },
  _label_text: {
    color: "white",
    fontFamily: "Metropolis_SemiBold",
  },
  _label_view: {
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: "#D6F5FF",
    padding: 10,
  },
});

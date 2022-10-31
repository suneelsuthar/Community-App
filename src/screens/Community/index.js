import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../../component";
export default class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header
          navigation={this.props.navigation}
          title="Community Screen"
          color="black"
        />
        <View style={styles._body}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    // justifyContent: "center",
    paddingTop: 50,
  },

  _row: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 15,
    borderColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
    fontFamily: "Poppins_Regular",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  _text: {
    fontFamily: "Metropolis_Medium",
    fontSize: 15,
  },
  _right_arrow: {
    height: 15,
    width: 20,
  },
  _body: {
    padding: 20,
  },
});

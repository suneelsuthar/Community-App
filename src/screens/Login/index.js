import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  LoginFunc = async () => {
    this.props.navigation.navigate("AppNavigation");
  };

  render() {
    const { navigate } = this.props.navigation;
    let { email, password } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles._header_view}>
          <Text style={styles.title}>Sign in</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : 20}
          style={styles.container}
        >
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View style={styles.mainView}>
              <TextInput
                style={styles.textInput}
                placeholder="User name"
                returnKeyType="next"
                value={email}
                placeholderTextColor="#7DD8FF"
                onChangeText={(e) => this.setState({ email: e })}
                onSubmitEditing={() => this.secondInput.focus()}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                value={password}
                placeholderTextColor="#7DD8FF"
                onChangeText={(e) => this.setState({ password: e })}
                secureTextEntry
                ref={(ref) => {
                  this.secondInput = ref;
                }}
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <View>
                  <Text
                    style={{
                      color: "#7DD8FF",
                      opacity: 0.5,
                      fontFamily: "Poppins_Medium",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.LoginFunc()}>
                <LinearGradient
                  // Button Linear Gradient
                  style={styles.loginButton}
                  colors={["#0093ED", "#0093ED"]}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontFamily: "Poppins_Medium",
                      }}
                    >
                      Login
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.signupText}
              onPress={() => navigate("CreateAccount")}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 40,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontFamily: "Metropolis_Medium",
                      fontSize: 16,
                      color: "#7DD8FF",
                    }}
                  >
                    Don't have an account? Sign up now
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  mainView: {
    ...Platform.select({
      android: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "center",
        marginTop: "22.2%",
      },
      ios: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "center",
        marginTop: "5%",
      },
    }),
  },

  title: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Poppins_Bold",
    padding: 20,
    color: "#0093ED",
  },

  textInput: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 14,
    padding: 15,
    borderColor: "#0093ED",
    backgroundColor: "white",
    fontFamily: "Poppins_Regular",
    color: "#0093ED",
  },
  forgotPassword: {
    // marginTop: 30,
    justifyContent: "center",
    // textAlign: "center",
    alignSelf: "center",
    fontSize: 14,
    fontFamily: "Metropolis_Regular",
    color: "#000",
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 16,
  },
  signupText: {
    marginTop: 36,
    alignSelf: "center",
    justifyContent: "center",
  },
  _header_view: {
    backgroundColor: "#D6F5FF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#0093ED",
  },
});

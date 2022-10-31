import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Splash,
  Login,
  Community,
  Home,
  Report,
  SavedItems,
  Alerts,
  SplashPorcess,
  PostDetails,
} from "./../screens";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      tabBarActiveTintColor="red"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            if (focused) {
              return <Feather name="home" color="#0093ED" size={20} />;
            } else {
              return <Feather name="home" color="black" size={20} />;
            }
          } else if (route.name === "Report") {
            if (focused) {
              return <FontAwesome name="list-alt" color="#0093ED" size={20} />;
            } else {
              return <FontAwesome name="list-alt" color="black" size={20} />;
            }
          } else if (route.name === "SavedItems") {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="content-save-outline"
                  color="#0093ED"
                  size={20}
                />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="content-save-outline"
                  color="black"
                  size={20}
                />
              );
            }
          } else if (route.name === "Alerts") {
            if (focused) {
              return <Feather name="alert-octagon" color="#0093ED" size={20} />;
            } else {
              return <Feather name="alert-octagon" color="black" size={20} />;
            }
          } else if (route.name === "Community") {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="google-circles-communities"
                  color="#0093ED"
                  size={20}
                />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="google-circles-communities"
                  color="black"
                  size={20}
                />
              );
            }
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#b3b3b3",
          tabBarShowLabel: false,
          headerTitleStyle: { fontFamily: "Metropolis_SemiBold" },
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#b3b3b3",
          headerTitle: "",
          headerTitleStyle: { fontFamily: "Metropolis_SemiBold" },
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SavedItems"
        component={SavedItems}
        options={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#b3b3b3",
          tabBarLabelStyle: {
            marginBottom: 1,
            fontFamily: "Metropolis_Regular",
          },
          tabBarShowLabel: false,

          headerTitle: "SavedItems",
          headerTitleStyle: { fontFamily: "Metropolis_SemiBold" },
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#b3b3b3",
          tabBarShowLabel: false,
          headerTitleStyle: { fontFamily: "Metropolis_SemiBold" },
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#b3b3b3",
          headerTitle: "Community",
          headerTitleStyle: { fontFamily: "Metropolis_SemiBold" },
          headerTitleAlign: "center",
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="SplashPorcess" component={SplashPorcess} />
        <Stack.Screen name="AppNavigation" component={HomeNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Community" component={Community} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

import React from "react";
import { useFonts } from "expo-font";
import AppNavigation from "./src/navigation";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [loaded] = useFonts({
    Metropolis_SemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
    Metropolis_Regular: require("./assets/fonts/Metropolis-Regular.otf"),
    Metropolis_Medium: require("./assets/fonts/Metropolis-Medium.otf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),

    //
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <AppNavigation />
      <FlashMessage position="top" />
    </>
  );
}

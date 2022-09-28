import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-Bold": require("./assets/fonts/Rajdhani-Bold.ttf"),
    "Rajdhani-Light": require("./assets/fonts/Rajdhani-Light.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <AppNavigator />;
}

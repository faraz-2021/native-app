import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/screens/FooterTabs";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = () => {
    return Font.loadAsync({
      "Roboto-italic": require("./assets/font/Roboto-Italic.ttf"),
      "Archivo-Italic": require("./assets/font/Archivo-Italic.ttf"),
    });
  };
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
  return (
    <NavigationContainer>
      <Tabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/screens/FooterTabs";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import SignInButton from './src/components/screens/SignInButton';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

const MainNavigator = createSwitchNavigator({
  login:{screen:SignInButton},
  profile:{screen:Tabs}
})

const App1 = createAppContainer(MainNavigator)

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
      <App1 />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import TodoApp from "./src/components/TodoApp";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TodoApp />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});

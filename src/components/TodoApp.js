import React from "react";
import { View, StyleSheet } from "react-native";
import TodoHeader from "./TodoHeader";
import List from "./List";
import Constants from "expo-constants";

export default function TodoApp({ type, addTodos, todo, setCheck }) {
  return (
    <View style={styles.Margin}>
      <TodoHeader addTodos={addTodos} type={type} />
      <List todo={todo} setCheck={setCheck} />
    </View>
  );
}

const styles = StyleSheet.create({
  Margin: {
    marginTop: Constants.statusBarHeight,
  },
});

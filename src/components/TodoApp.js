import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import TodoHeader from "./TodoHeader";
import List from "./List";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { useEffect } from "react";

export default function TodoApp({
  type,
  addTodos,
  todo,
  setCheck,
}) {
  useEffect(() => {
  }, [type]);

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

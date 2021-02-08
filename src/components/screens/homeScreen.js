import React from "react";
import { ScrollView, View } from "react-native";
import TodoApp from "../TodoApp";

export default function HomeScreen({ addTodos, todo, setCheck }) {
  return (
    <ScrollView>
      <View>
        <TodoApp
          type="Today"
          addTodos={addTodos}
          todo={todo}
          setCheck={setCheck}
        />
      </View>
    </ScrollView>
  );
}

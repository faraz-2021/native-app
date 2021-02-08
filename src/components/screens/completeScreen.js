import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import TodoApp from "../TodoApp";

export default function Completed({ addTodos, todo, setCheck }) {
  const [complete, setComplete] = useState([]);
  useEffect(() => {
    CompleteList();
  }, [CompleteList]);

  const CompleteList = () => {
    const Comp = todo.filter((item) => {
      if (item.check) {
        return item;
      }
    });
    setComplete(Comp);
  };

  return (
    <ScrollView>
      <View>
        <TodoApp
          type="Completed"
          addTodos={addTodos}
          todo={complete}
          setCheck={setCheck}
        />
      </View>
    </ScrollView>
  );
}

import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import TodoApp from "../TodoApp";

export default function Active({ addTodos, todo, setCheck }) {
  const [active, setActive] = useState([]);
  useEffect(() => {
    ActiveList();
  }, [ActiveList]);

  const ActiveList = () => {
    const Comp = todo.filter((item) => {
      if (!item.check) {
        return item;
      }
    });
    setActive(Comp);
  };
  return (
    <ScrollView>
      <View>
        <TodoApp
          type="Active"
          addTodos={addTodos}
          todo={active}
          setCheck={setCheck}
        />
      </View>
    </ScrollView>
  );
}

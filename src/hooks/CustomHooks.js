import { useState } from "react";

export default function useAdd() {
  const [todo, setTodo] = useState([]);

  const addTodos = (text) => {
    if (text.trim().length > 0) {
      setTodo((prevValue) => {
        return [
          ...prevValue,
          { title: text.trim(), key: Math.random().toString(), check: false },
        ];
      });
    } else {
      Alert.alert("error!", "List can't be empty", [
        { text: "Ok", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };
  const setCheck = (key) => {
    const newList = todo.map((e) => {
      if (e.key === key) {
        return { ...e, check: !e.check };
      } else {
        return { ...e };
      }
    });
    setTodo(newList);
  };
  return [todo, addTodos, setCheck];
}

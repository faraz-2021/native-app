import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TodoApp from "./src/components/TodoApp";
import { Colors } from "./src/components/color/color";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ addTodos, todo, setCheck }) {
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
function Active({ addTodos, todo, setCheck }) {
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

function Completed({ addTodos, todo, setCheck }) {
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
const Tab = createBottomTabNavigator();

export default function App() {
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

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { textTransform: "none", fontSize: 20, marginRight: 10 },
          tabStyle: {
            width: "auto",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen name="All">
          {() => (
            <HomeScreen addTodos={addTodos} todo={todo} setCheck={setCheck} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Active">
          {() => <Active addTodos={addTodos} todo={todo} setCheck={setCheck} />}
        </Tab.Screen>
        <Tab.Screen name="Completed">
          {() => (
            <Completed setCheck={setCheck} addTodos={addTodos} todo={todo} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

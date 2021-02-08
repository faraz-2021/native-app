import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../color/color";
import useAdd from "../../hooks/CustomHooks";
import HomeScreen from "./homeScreen";
import Active from "./activeScreen";
import Completed from "./completeScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const [todo, addTodos, setCheck] = useAdd("");

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.black,
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          padding: 1,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="All"
        component={() => (
          <HomeScreen addTodos={addTodos} todo={todo} setCheck={setCheck} />
        )}
      />
      <Tab.Screen
        name="Active"
        component={() => (
          <Active addTodos={addTodos} todo={todo} setCheck={setCheck} />
        )}
      />
      <Tab.Screen
        name="Completed"
        component={() => (
          <Completed addTodos={addTodos} todo={todo} setCheck={setCheck} />
        )}
      />
    </Tab.Navigator>
  );
}

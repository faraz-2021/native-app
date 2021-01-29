import React from "react";
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "./color/color";

const List = (props) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={props.todo}
        renderItem={({ item }) => (
          <View style={styles.flex}>
            <View style={styles.flex1}>
              <TouchableOpacity onPress={() => props.setCheck(item.key)}>
                <Icon
                  name={
                    !item.check
                      ? "checkbox-blank-circle-outline"
                      : "checkbox-marked-circle-outline"
                  }
                  style={styles.checkButton}
                />
              </TouchableOpacity>
              <Text style={!item.check ? styles.title : styles.title1}>
                {item.title}
              </Text>
            </View>
            <View>
              <Octicons
                name="primitive-dot"
                color={item.check ? Colors.green : Colors.red}
                size={30}
              />
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 18,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    height: 80,
    alignContent: "center",
  },
  flex1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#F9C2FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
  },
  title1: {
    fontSize: 25,
    marginLeft: 10,
    textDecorationLine: "line-through",
    opacity: 0.3,
  },
  indicator: {
    color: Colors.green,
    fontSize: 25,
  },
  indicator2: {
    color: Colors.red,
    fontSize: 25,
  },
  checkButton: {
    fontSize: 22,
    color: Colors.blue,
  },
});
export default List;

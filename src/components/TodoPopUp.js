import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Colors } from "./color/color";
export default function TodoModal(props) {
  const [text, setText] = useState("");
  console.log(props);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.innerView}>
            <Text style={styles.modalText}>Add Todo</Text>
            <TextInput
              style={styles.modalView}
              onChangeText={(text) => setText(text)}
              value={text}
            />
            <View style={styles.flex}>
              <TouchableOpacity onPress={props.handleClick}>
                <Text style={styles.Button}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.addTodos(text);
                  props.setModalVisible(false);
                }}
              >
                <Text style={styles.Button}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 200,
    width: 300,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Button: {
    color: Colors.blue,
    fontSize: 15,
    marginTop: 10,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    width: 300,
    fontWeight: "bold",
    fontSize: 20,
  },
  flex: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  innerView: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

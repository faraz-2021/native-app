import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodoModal from './TodoPopUp';


export default function Todo() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClick = () =>{
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.Main}>
            <View style={styles.Head}>
            <Text style={styles.t1}>Today  </Text>
                <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible);
                    console.log(setModalVisible)
                }}>
                    <Icon name="pluscircleo" size={30} />
                </TouchableOpacity>
            </View>

            {modalVisible ? <TodoModal modalVisible={modalVisible} x={handleClick} /> : null}

            <View>
              
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    Main: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        justifyContent: "center"
    },
    Head: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,



    },
    t1: {
        fontSize: 30,
        fontWeight: "bold",
    },
});

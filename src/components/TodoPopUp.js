import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Touchable, TextInput, TouchableOpacity, View, Modal, TouchableHighlight } from 'react-native';

export default function TodoModal(props) {
    const [value, setValue] = useState('Useless Placeholder');


    console.log(props)
    return (
        <View style={{}}>
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
                            onChangeText={text => setValue(text)}
                            value={value}
                        />
                        <View style={styles.flex}>
                            <TouchableOpacity ><Text style={styles.Button}>Cancel</Text></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.Button}>Done</Text></TouchableOpacity>
                        </View>
                    </View>


                </View>
            </Modal>


        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",



    },
    modalView: {
        height: 200,
        width: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    Button: {
        color: "#18BBD5",
        fontSize: 15,
        marginTop: 10,

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        width: 180, fontWeight: 'bold', fontSize: 20
    },
    flex: {
        width: 180,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",


    },
    innerView:{
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5
    }

});

import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TodoContent from './TodoPopUp';


export default function Todo() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.Main}>
            <View style={styles.Head}>
                <Text style={styles.t1}>
                    Today
            </Text>
            <TouchableOpacity  onPress={() => {
                    setModalVisible(!modalVisible);
                    console.log(setModalVisible)
                }}>
            <Icon name="pluscircleo" size={30}  />
            </TouchableOpacity>
            </View>

            {modalVisible ? <View> <TodoContent  modalVisible={modalVisible}/></View>: null}
            
            

        </View>
    )
}


const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#fff',
        borderWidth: 1,
        justifyContent:"center"
    },
    Head: {
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
     borderWidth: 1 ,
     paddingLeft:10,
     paddingRight:10,
    
     

    },
    t1:{
        fontSize:30,    
        fontWeight:"bold",
    },
});
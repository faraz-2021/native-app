import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'; 
import Todo from './src/components/TodoHeader';
import TodoContent from './src/components/TodoPopUp';
import List from './src/components/List'


export default function App() {
  return (
    <>
    <ScrollView style={styles.container}>
      <View>
      <Todo/>

      <StatusBar style="auto" /></View>
      
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});

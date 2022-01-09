//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator'
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();
// create a component
const App = () => {
  return (
     <View style={styles.container}>
    <RootNavigator/>
   </View>
    
  );
};

// define your styles
const styles = StyleSheet.create({
container:{
  flex:1
}
});

//make this component available to the app
export default App;

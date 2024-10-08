import { Image, StyleSheet, Platform, View,Text, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import React from 'react';

export default function HomeScreen() {
  return (
  <View>

    <View  style={styles.timer}>
<Text style={styles.text}> Player 1</Text>

    </View>


    <View  style={styles.timer}>
    <Text style={styles.text}> Player 2</Text>

    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
 
 timer:{
  height:windowHeight*0.45,
  backgroundColor:"#011417",
  color:"#ebf1f2",
  width:windowWidth*0.9
 },
 text:{
  color:"red"
 }
});

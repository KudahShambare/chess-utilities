import { StyleSheet, View,Picker,Text, Button} from 'react-native';


import React from 'react';

export default function TabTwoScreen() {

  const times = [
    {
      "name": "1+0",
      "time": 1,
      "increment": 0
    },
    {
      "name": "2+1",
      "time": 2,
      "increment": 1
    },
    {
      "name": "3+2",
      "time": 3,
      "increment": 2
    },
    {
      "name": "5+3",
      "time": 5,
      "increment": 3
    },
    {
      "name": "10+5",
      "time": 10,
      "increment": 5
    },
    {
      "name": "15+10",
      "time": 15,
      "increment": 10
    },
    {
      "name": "30+30",
      "time": 30,
      "increment": 30
    }
  ]
  return (
  
    <View>
<Text>Timer Type</Text>
      <Picker>
      <Picker.Item label="Sudden Death" value="java" />
        <Picker.Item label="Increment" value="js" />
        <Picker.Item label="Odds" value="js" />

      </Picker>

      <View>
        <Text>Popular Time Controls</Text>

        <View style={styles.timesGrid}>
          {times.map(time =>{
            return <Button
            onPress={()=>{

            }}
            title={time.name}
            color="#09889e"
            accessibilityLabel="Learn more about this purple button"
          />
          })}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  timesGrid:{
    display:"flex"
  }
 
});

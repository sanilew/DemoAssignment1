import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button,TextInput } from 'react-native';

import React, {useState} from 'react';

export default function Screen3() {

  const [text, onChangeText] = React.useState(' ');
  return (
    <View >
      <Text>Welcome to Screen3</Text>
      <StatusBar style="auto" />
      <Button title='Fetch API data' onPress={()=>  
    navigation.navigate("" )  
    } />
  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={"Enter Value"}
        
      />
<Button title='Update API data' onPress={()=>  
    navigation.navigate("" )  
    } />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
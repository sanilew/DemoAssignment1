import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from "react-redux"

import DatePicker from "../Tabs/DatePicker"
import Dropdown from '../Tabs/Dropdown';
// import Dropdown from '../Tabs/Dropdown';
import   {changeInput,postOutput}   from "./Redux/action"


export default function Screen1({ navigation }) {
  
  // const text=props.text 
  const dispatch=useDispatch()
  const [number, onChangeNumber] = useState('');
   const [date, setDate] = useState(new Date());
   const [error,setErrors]=useState();
   const[FName,setFName]=useState();
   const[LName,setLName]=useState();


   const validateForm=()=>{
    let errors={ }
    if(!FName) {errors.FName="Field Required";}
    if(!LName){ errors.LName="Field Required"}

    setErrors(error)
    return console.log("sucess")
   }

   const handleSubmit=()=>{
   
    if(validateForm( )){
      console.log("Submitted",FName,LName)

     
    }
   }


function updateValue(text,field){
console.log(text)
}

  return (
    <View >
      <Button title='go to screen2' onPress={()=>  
    navigation.navigate("Screen2",{"Name":"ANil"})  
    } />

<TextInput
        style={styles.input}
        onChangeText={setFName} 
        value={FName}
        placeholder="FistName"
        
      />
      <TextInput
        style={styles.input}
        onChange={setLName}
        value={LName}
        placeholder="LastName"
      />

    <Text> Select Date:   <DatePicker/></Text> 
    <Dropdown/>
    
    {/* r */}

    <Button title='Save Now' onPress={()=>  
      handleSubmit( )
    } />
      <Button title='Fetch API data' onPress={()=>  
    navigation.navigate("" )  
    } />
      
      <StatusBar style="auto" />
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
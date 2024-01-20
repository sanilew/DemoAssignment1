import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

export default function Screen2({navigation}) {
  return (
    <View >
      
      <Button title='go to screen3' onPress={()=>  
    navigation.navigate("Screen3",{"Name":"ANil"})  
    } />
     <Button title='Display Screen2 data' onPress={()=>  
    navigation.navigate("" )  
    } />
      <StatusBar style="auto" />
    </View>
  );
}
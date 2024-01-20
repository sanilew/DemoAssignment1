import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

// import { Provider } from "react-redux";
const Stack=createStackNavigator();

export default function App(){
  return(
    
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{title:"welcome to screen1"}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{title:"welcome to screen2"}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{title:"welcome to screen3"}}/>
      </Stack.Navigator>

</NavigationContainer>

 





  )
}



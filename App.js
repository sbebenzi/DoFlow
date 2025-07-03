import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Login from "./src/screens/login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LOGIN" component={Login}></Stack.Screen>
          <Stack.Screen name="HOME" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//All routes will be listed below
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName='Landing'>
        <Stack.Screen name="Landing" component={Landing} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} screenOptions={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default () => {
  return <Route />
}

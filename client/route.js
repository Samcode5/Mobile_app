import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/signup';
import Login from './screens/login';
export default function Route() {
    const Stack=createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='signup' screenOptions={{headerShown:false}}>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
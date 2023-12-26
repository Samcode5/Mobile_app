import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/signup';
import Login from './screens/login';
import  Home from './screens/home';
import Card from './components/Card';
export default function Route() {
    const Stack=createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name='card' component={Card}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
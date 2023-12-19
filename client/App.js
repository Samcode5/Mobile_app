import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import Route from './route';
import { SafeAreaProvider } from 'react-native-safe-area-view';

export default function App() {
function handleClick()
{
     axios.get("http://10.0.2.2:5000/hello").then((res)=>{
       setData(res.data)
     }).catch((err) =>{
      console.log("Error",err);
     })
}

 const [data,setData]=useState('');

  return (
   <SafeAreaProvider>
   <Route/>
   </SafeAreaProvider>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center', 
//     marginVertical:20 
//   },
// });

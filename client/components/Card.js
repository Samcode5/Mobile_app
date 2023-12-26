import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Bold } from 'react-native-feather'

export default function Card(props) {
  return (
    <View style={styles.card}>
    <Image source={props.image} style={{width:180 , height:290, opacity:0.85}}/>
    <Text style={styles.text}>{props.name}</Text>
    </View>
 )
}

const styles=StyleSheet.create({
  
    text:{
        position:'relative',
        bottom:40,
        left:40,
        color:'white',
        fontSize:24,
        fontWeight:'700',
    
},
card:{
  width:'50%'
}
})


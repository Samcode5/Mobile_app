import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Search } from 'react-native-feather'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View className="flex-row p-2  text-gray-500  border border-gray-500 rounded-2xl items-center space-x-1">
        <Search width={18} height={20} stroke="gray"/>
        <TextInput placeholder='where do you want to go ?' className="text-md"/>
        </View>
        </View>
      <View style={styles.body}><Text>Body</Text></View>
      <View style={styles.footer}><Text>Footer</Text></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:40,
        marginHorizontal:5
    },

    header:{
        margin:10
    },

    body:{
        flex:8, // 80% of the available space
        backgroundColor: 'lightgreen', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    footer:{
        backgroundColor: 'lightcoral', // Example background color
        justifyContent: 'center',
        alignItems: 'center',

    }


})
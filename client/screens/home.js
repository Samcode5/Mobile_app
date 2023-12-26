import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Search } from 'react-native-feather'
import Card from '../components/Card'
import HomeFooter from '../components/homeFooter'
import {data} from "../data.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View className="flex-row p-2   border rounded-2xl items-center space-x-2">
        <Search width={18} height={20} stroke="gray"/>
        <TextInput placeholder='Where do you want to go ?' className="text-lg text-slate-600"/>
        </View>
        </View>
      <View style={styles.body}>
        <View style={styles.cardContainer}>
        {
             data.map((val,index) =>{
              return (
                <Card
                key={val.id}
                 name={val.name}
                 image={val.image}
                 />
              )
             })
        }
        <Card />
        </View>
        </View>
      <View style={styles.footer}>
        <HomeFooter/>
      </View>
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
        marginTop:10,
        marginBottom:20
    },

    body:{
        flex:8,
        backgroundColor:'white',
        paddingTop:5,
        marginBottom:10,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',   
        shadowRadius: 3,
        
    },



    cardContainer:{
       flexDirection:'row',
       justifyContent:'space-evenly',
       flexWrap:'wrap'
       
    },
    
    footer:{
 
    }


})
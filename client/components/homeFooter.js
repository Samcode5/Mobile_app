import { View, Text } from 'react-native'
import React from 'react'
import { MapPin,Globe,HelpCircle,MoreHorizontal} from 'react-native-feather'

export default function HomeFooter() {
  return (
    <View className="flex-row justify-between mb-3 bg-slate-50">
     <View className="flex-col  items-center p-1"> 
        <MapPin width={15} height={15} stroke='black'/>
        <Text>Explore</Text>
     </View>
     <View className="flex-col  items-center p-1">
        <Globe width={15} height={15} stroke="black"/>
     <Text>My Tours</Text>
     </View>
     <View className="flex-col  items-center p-1">
        <HelpCircle width={15} height={15} stroke="black"/>
     <Text>Help</Text>
     </View>
     <View className="flex-col  items-center p-1" >
        <MoreHorizontal width={15} height={15} stroke="black"/>
     <Text>More</Text>
     </View>
    </View>
  )
}
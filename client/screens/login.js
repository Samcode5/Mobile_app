import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import {User,Lock} from "react-native-feather";
import {useNavigation} from "@react-navigation/native"

export default function Login() {
    const navigation=useNavigation();
  return (
    <View className="h-full w-full">
      <Text className="font-bold text-3xl m-20 text-center">Login</Text>
      {/* form */}
      <View className="flex-1 items-center mx-4 space-y-4">

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <User width={24} height={24}  stroke="black" />
      <TextInput placeholder='Username'/>
      </View>

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <Lock stroke="black" width={24} height={24}/>
      <TextInput placeholder='Password' secureTextEntry />
      </View>

      <TouchableOpacity className="bg-neutral-900 p-5 rounded-2xl m-3 w-full">
        <Text className="text-zinc-300 text-center text-lg font-bold">Login</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center">
        <Text>Don't  have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text className="text-sky-600 cursor-pointer">Sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
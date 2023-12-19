import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {User,Lock} from "react-native-feather";
import {useNavigation} from "@react-navigation/native"

export default function Signup() {
  const navigation=useNavigation();
  const [userdata,setUserData]=useState({username:"",password:"",confirm_password:""})

  function handleSubmit()
  {
       if(userdata.username &&  userdata.password.length && userdata.confirm_password)
       {

          if(userdata.password!=userdata.confirm_password)
          {
              setUserData("");
              return alert("PLease check you password");
              
          }

           else
           {
               console.log(userdata);
           }
          
         
       }

       else
       {
            setUserData("");
            return alert("Kindly fill all fields")
       }

       setUserData("");
       
       
  }

  return (
  <View className="h-full w-full">
      <Text className="font-bold text-3xl m-20 text-center">Sign in</Text>
      {/* form */}
      <View className="flex-1 items-center mx-4 space-y-4">

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <User width={24} height={24}  stroke="black" />
      <TextInput  placeholder='Username' value={userdata.username} onChangeText={(text) => setUserData({...userdata,'username':text})}/>
      </View>

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <Lock stroke="black" width={24} height={24}/>
      <TextInput  placeholder='Password' value={userdata.password} secureTextEntry onChangeText={(text) => setUserData({...userdata,'password':text})}/>
      </View>

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <Lock stroke="black" width={24} height={24}/>
      <TextInput  placeholder='Confirm Password' value={userdata.confirm_password} secureTextEntry onChangeText={(text) => setUserData({...userdata,'confirm_password':text})}/>
      </View>

      <TouchableOpacity className="bg-neutral-900 p-5 rounded-2xl m-3 w-full">
        <Text className="text-zinc-300 text-center text-lg font-bold" onPress={handleSubmit}>Sign in</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center">
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text className="text-sky-600 cursor-pointer">Log in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
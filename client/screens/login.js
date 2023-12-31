import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {User,Lock} from "react-native-feather";
import {useNavigation} from "@react-navigation/native"
import axios from 'axios';

export default function Login() {
    const navigation=useNavigation();
    const [userdata,setUserData]=useState({username:"",password:""});

    function handleSubmit()
    {
      if(userdata.username && userdata.password)
      {
        try{
          axios({
            method:'POST',
            url:"http://10.0.2.2:5000/login" ,
            data:{
              username:userdata.username,
              password:userdata.password,
              
            }
          }).then((val) =>{
            if(val.data[0])
            {
                if(val.data[0].password!=userdata.password)
                {
                   alert("password doesn't match")
                   setUserData("")
                }

                else
                {
                    navigation.navigate("home");
                }



            }
            else
            {
                alert("No such user, sign in")
                setUserData("")
            }
          }).catch((err) =>{
            console.log(err)
          })
        }
        catch(err)
        {
          console.log(err)
        }

      }
      else
      {
           setUserData("");
           alert("Fill all the fields");
      }
       
    }

  return (
    <View className="h-full w-full">
      <Text className="font-bold text-3xl m-20 text-center">Login</Text>
      {/* form */}
      <View className="flex-1 items-center mx-4 space-y-4">

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <User width={24} height={24}  stroke="black" />
      <TextInput placeholder='Username' value={userdata.username} onChangeText={(text) => setUserData({...userdata,'username':text})}/>
      </View>

      <View className="bg-black/5 p-5  rounded-2xl w-full mb-3 flex-row gap-2"> 
      <Lock stroke="black" width={24} height={24}/>
      <TextInput placeholder='Password' value={userdata.password} secureTextEntry onChangeText={(text) => setUserData({...userdata,'password':text})}/>
      </View>

      <TouchableOpacity className="bg-neutral-900 p-5 rounded-2xl m-3 w-full">
        <Text className="text-zinc-300 text-center text-lg font-bold" onPress={handleSubmit}>Login</Text>
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
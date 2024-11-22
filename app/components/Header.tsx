import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/build/EvilIcons'
import { Link, router, useNavigation } from 'expo-router'

const Header = ({title} : {title: String}) => {
  const navigation = useNavigation()
  return (
    <View>
      <View className='flex flex-row w-full items-center top-5 '>
        <View className='w-10 h-10 rounded-full bg-primary'>

        </View>
        <View className='flex w-3/4'>
          <Text className=' text-black text-center text-2xl font-bold drop-shadow-md w-fit '>{title}</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Cart' as never)} className='bg-primary p-2 flex justify-center items-center rounded-full w-10 h-10' >
          <EvilIcons name="cart" size={30} color="white" />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Header
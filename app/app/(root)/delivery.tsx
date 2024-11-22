import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import delivery from '../../assets/images/delivery.gif'


const Delivery = () => {
  return (
    <View>
    <View className='flex flex-row w-full p-4 justify-between'>
      <View className='flex justify-center items-center'>
        <Text className='text-white'>En preparation</Text>

        <View className='bg-white top-9 z-50 rounded-full p-3'>
          <Image source={delivery} className='w-9 h-9'  />
        </View>
        <FontAwesome6 name="location-dot" size={50} color="white" />
      </View>
      <View className='flex justify-center items-center'>
      <Text className='text-white'>En route</Text>

        <View className='bg-white top-9 z-50 rounded-full p-3'>
          <Image source={delivery} className='w-12 h-12'  />
        </View>
        <FontAwesome6 name="location-dot" size={50} color="white" />
      </View>
      <View className='flex justify-center items-center'>
      <Text  className='text-white'>Arrivé</Text>

        <View className='bg-white top-9 z-50 rounded-full p-3'>
          <Image source={delivery} className='w-16 h-16'  />
        </View>
        <FontAwesome6 name="location-dot" size={50} color="white" />
      </View>


      
    </View>
    <View className='w-full flex justify-center items-center'>
      <View className='bg-white p-1  w-[90%]  -top-5 rounded-full '></View>

    </View>
  
  </View>
  )
}

export default Delivery
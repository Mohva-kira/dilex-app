import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import om from '../../assets/images/om.png'
import moov from '../../assets/images/moov.png'
const Payment = () => {
  return (
    <View className='w-full flex flex-row justify-center space-x-5 mt-5'>
     <TouchableOpacity><Image source={om} className='w-20 h-20' /></TouchableOpacity> 
     <TouchableOpacity><Image source={moov} className='w-20 h-20' /></TouchableOpacity> 
    </View>
  )
}

export default Payment
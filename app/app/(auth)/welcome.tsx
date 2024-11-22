import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { router } from 'expo-router'

import { onboarding } from '../../constants'
import Swiper from 'react-native-swiper'

const OnBoarding = () => {
    const swiperRef = useRef<Swiper>(null)
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      
      <TouchableOpacity 
      onPress={() => router.replace('/(auth)/sign-up')}
      className='w-full flex justify-end items-end p-5'>
        <Text className='text-black text-base font-bold'>Skip</Text>
      </TouchableOpacity>

      <Swiper 
      ref={swiperRef} 
      loop={false} 
      dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
      activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
      onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map(item => (
          <View key={item.id} className='flex items-center justify-center p-5'>
            <Image source={item.image} className='w-full h-[560px]' />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        ))

        }
       
      </Swiper>
    </SafeAreaView>
  )
}

export default OnBoarding
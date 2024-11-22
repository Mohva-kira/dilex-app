import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'

const Container = ({children, title} : {title: String, children: any}) => {
  return (
    <SafeAreaView className="flex-1 bg-light bg-opacity-75 p-1" >
        <Header title={title} />
        <View className="w-full mt-10">
            {children}
        </View>
    </SafeAreaView>
  )
}

export default Container
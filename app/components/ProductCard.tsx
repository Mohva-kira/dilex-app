import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from 'expo-router';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Définition des types pour les écrans et leurs paramètres
type RootStackParamList = {
  Product: { id: number };
  //  Autres écrans peuvent être ajoutés ici
};

const ProductCard = ({title, id, nb_piece, image, price, description} : any) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    
       <View className='bg-primary-light bg-gradient-to-tr m-1 rounded-lg  -right-1 '>
                    <View className='w-full flex items-center flex-row space-x-4 p-2'>
                      <TouchableOpacity onPress={() => navigation.navigate('Product',  { id: id  })} className='rounded-full w-24 h-24 bg-black flex justify-center items-center'>
                        <View className='rounded-full w-20 h-20 bg-mono p-[px]'>
                          <Image source={{uri: 'http://192.168.216.211:1337' + image }}  className='object-contain w-full h-full rounded-full mix-blend-multiply ' /> 
                        </View>

                      </TouchableOpacity>

                      <View className='rounded-full w-7 h-9 bg-primary flex justify-center items-center'>
                          <EvilIcons name="cart" size={20} color="white" />

                      </View>

                    </View>
                    <View className='flex w-full  p-2'>
                      <Text className='text-white font-bold w-full text-xs'>
                       {title} 
                      </Text>

                      <Text className='text-white font-bold w-full pt-2 text-xs'>
                      <Text className='px-2 text-xs'> {nb_piece} <Text className='font-light'>Pcs </Text> -  </Text>
                      <Text className='font-light'> Fcfa </Text>{Number(price).toLocaleString()}
                      </Text>

                    </View>


    </View>
  
  )
}

export default ProductCard
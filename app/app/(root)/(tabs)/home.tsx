import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Container from './../../../components/Container';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  
  const navigation = useNavigation()
  
  return (  
      <Container title={'Accueil'}> 
          <View className='flex flex-row w-full justify-between p-4 rounded-xl bg-opacity-5 bg-dark-blue'>
            <View className='  '>
              <Text className='text-white text-base font-semibold'>
                Petit dej et snacks
              </Text>
              <View className='w-full pt-2 flex flex-row gap-3'>
                <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
                <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
                <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
                <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
                <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
              </View>

              <Text className='text-sm text-white font-light'>
                14 ingredients Bio
              </Text>
            </View>
            <View className=' right-3'>
              <Image source={images.serveuse} className='w-36 h-32 absolute -right-7 -top-12 ' />

              <Image source={images.plat1} className='w-14 h-14 absolute right-10  ' />

            </View>

          </View>

          <View className='mt-5 bg-gradient-to-b bg-dark-blue p-4  rounded-xl'>
            <View className='w-full flex   flex-row justify-between items-center'>
              <Text className='text-white font-bold text-lg'>Livraison rapide</Text>
              <Text className='text-white font-light text-sm'>Voir tout</Text>

            </View>
            <View className='flex flex-row justify-between pt-5 space-x-2'>
                  {/* Section plat principal  */}
              <View className='w-2/3'>
                <View className='rounded-xl bg-primary-light/70 flex justify-center items-center  w-full p-4'>
                  <TouchableOpacity onPress={() =>navigation.navigate('Product' as never)}  className='rounded-full bg-black h-36 w-36 flex items-center justify-center shadow-lg shadow-primary '>
                    <View className='rounded-full bg-mono h-32 w-32 shadow-lg shadow-primary '>

                    </View>
                  </TouchableOpacity>
                  
            
                  <View className='mt-5'>
                    <Text  className='text-white text-center font-bold text-lg'> Plat 1</Text>
                    <View className='flex flex-row justify-center items-center space-x-2'>
                      <Text className='text-white font-thin text-sm'>24 min</Text>
                      <View className='flex justify-center flex-row space-x-2'>
                        
                        <Image className='w-4 h-4' source={icons.star} tintColor={'yellow'} />
                        <Text>4.8</Text>
                      </View>
                    </View>
                  </View>

                  <View className='mt-5 flex flex-row w-full justify-between'>
                    <Text className='text-lg text-white font-bold'>6 500 Fcfa</Text>
                    <View className='rounded-full w-8 h-10 bg-primary flex justify-center items-center'>
                    <EvilIcons name="cart" size={24} color="white" />

                    </View>
                  </View>

                </View>
              </View>


              <View className='w-full flex justify-between '>
                  <View className='w-28  bg-primary-light bg-gradient-to-tr  rounded-lg  -right-1'>
                    <View className='w-full flex items-center flex-row space-x-4 p-2'>
                      <View className='rounded-full w-14 h-14 bg-black flex justify-center items-center'>
                        <View className='rounded-full w-12 h-12 bg-mono'>
                        
                        </View>

                      </View>

                      <View className='rounded-full w-6 h-8 bg-primary flex justify-center items-center'>
                          <EvilIcons name="cart" size={20} color="white" />

                      </View>

                    </View>
                    <View className='flex w-full p-1'>
                      <Text className='text-white font-bold w-full text-xs'>
                        Epices de Mumbai
                      </Text>

                      <Text className='text-white font-bold w-full pt-2 text-xs'>
                      <Text className='font-light'> Fcfa </Text>3 500  
                      </Text>

                    </View>


                  </View>


                  <View className='w-28  bg-primary-light bg-gradient-to-tr  rounded-lg  -right-1'>
                    <View className='w-full flex items-center flex-row space-x-4 p-2'>
                      <View className='rounded-full w-14 h-14 bg-black flex justify-center items-center'>
                        <View className='rounded-full w-12 h-12 bg-mono'>
                        
                        </View>

                      </View>

                      <View className='rounded-full w-6 h-8 bg-primary flex justify-center items-center'>
                          <EvilIcons name="cart" size={20} color="white" />

                      </View>

                    </View>
                    <View className='flex w-full p-1'>
                      <Text className='text-white font-bold w-full text-xs'>
                        Epices de Mumbai
                      </Text>

                      <Text className='text-white font-bold w-full pt-2 text-xs'>
                      <Text className='font-light'> Fcfa </Text>3 500  
                      </Text>

                    </View>


                  </View>
              </View>

            
            </View>
          </View>

          <View className='w-full flex flex-row rounded-lg mt-2 bg-dark-blue p-2'>
            <View className='w-2/3'>
              <Text className='text-white text-sm'>
                  20% de reduction sur toutes les commandes
              </Text>
              <Text className='text-white text-xs font-thin pt-2'>
                  20 dec au 29 decembre 2024
              </Text>

            </View>
            <View className='p-2 -top-12 h-16 shadow-md shadow-primary-light'>
              <Image source={images.burger} className='w-20 h-20 left-8 top-4 z-50 ' />

              <TouchableOpacity className='bg-light rounded-full w-full p-1'>
                <Text className='text-white'> Commander </Text>
              </TouchableOpacity>
            </View>
            


          </View>
      </Container>

  )
}

export default Home
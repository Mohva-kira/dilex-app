import { View, Text, TextInput, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'

const SignUp = () => {
  return (
    <View>
          <View className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <View className="sm:mx-auto sm:w-full sm:max-w-md">
                  <Text className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      Créer un compte
                  </Text>
                  <View className="mt-2 text-center text-sm text-gray-600 max-w">
                     <Text className='text-center'>ou</Text> 
                      <Text onPress={() => router.replace('/(auth)/sign-in')} className="font-medium text-center text-blue-600 hover:text-blue-500">
                          Connectez vous
                      </Text>
                  </View>
              </View>

              <View className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <View className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                      <View className="space-y-6" >
                          <View>
                              <Text  className="block text-sm font-medium text-gray-700">
                                  Numero de téléphpne
                              </Text>
                              <View className="mt-1">
                                  <TextInput id="phone" 
                                      keyboardType='phone-pad'
                                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                      placeholder="+223 77777777" />
                              </View>
                          </View>

                       
                          <View>
                              <Text  className="block text-sm font-medium text-gray-700">
                                  Mot de passe
                              </Text>
                              <View className="mt-1">
                                  <TextInput id="password" 
                                      secureTextEntry
                                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                      placeholder="Mot de passe" />
                              </View>
                          </View>

                          <View>
                              <Text  className="block text-sm font-medium text-gray-700">
                                  Répeter le mot de passe
                              </Text>
                              <View className="mt-1">
                                  <TextInput id="passwordSecond" 
                                      secureTextEntry
                                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                      placeholder="Répeter le mot de passe" />
                              </View>
                          </View>

                          <View>
                              <TouchableOpacity className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Text className='text-center text-white'> S'incrire </Text>
                              </TouchableOpacity>
                               
                                 
                              
                          </View>
                      </View>
                      <View className="mt-6">

                          <View className="relative">
                              <View className="absolute inset-0 flex items-center">
                                  <View className="w-full border-t border-gray-300"></View>
                              </View>
                              <View className="relative  w-full flex justify-center  text-sm">
                                  <Text className="px-2 w-full text-center bg-gray-100 text-gray-500">
                                      Ou continuer avec
                                  </Text>
                              </View>
                          </View>

                          <View className="top-5 flex flex-row justify-center gap-3">
                              <View>
                                  <TouchableOpacity 
                                      className="w-10 flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                      <Image style={{width: 20, height: 20}} source={images.facebook}
                                          alt=""/>
                                  </TouchableOpacity>
                              </View>
                              <View>
                                  <TouchableOpacity 
                                      className="w-10 flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                      <Image style={{width: 20, height: 20}}   source={images.twitter}
                                          alt=""/>
                                  </TouchableOpacity>
                              </View>
                              <View>
                                  <TouchableOpacity 
                                      className="w-10 flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-700 hover:bg-gray-50">
                                      <Image style={{width: 20, height: 20}}   source={images.google}
                                     
                                          alt=""/>
                                  </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
    </View>
  )
}

export default SignUp
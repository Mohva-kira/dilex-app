import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'

const SignIn = () => {
  return (
    <View>
          <View className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
              <View className="sm:mx-auto sm:w-full sm:max-w-md">
                  <Text className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      Connexion
                  </Text>
                  <View className="mt-2 text-center text-sm text-gray-600 max-w">
                     <Text className='text-center'>Ou</Text> 
                      <Text onPress={() => router.replace('/(auth)/sign-up')} className="font-medium text-center text-blue-600 hover:text-blue-500">
                          Créer un compte
                      </Text>
                  </View>
              </View>

              <View className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <View className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                      <View className="space-y-6" >
                          <View>
                              <Text  className="block text-sm font-medium text-gray-700">
                                  Numero de téléphone
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

                          <View className="flex items-center justify-between">
                              <View className="flex items-center">
                                  <TextInput id="remember_me"
                                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                  <Text  className="ml-2 block text-sm text-gray-900">
                                      Se souvenir de moi
                                  </Text>
                              </View>

                              <View className="text-sm">
                                  <Text  className="font-medium text-blue-600 hover:text-blue-500">
                                      Mot de passe oublié ?
                                  </Text>
                              </View>
                          </View>

                          <View>
                              <TouchableOpacity onPress={() => router.replace('/(root)/(tabs)/home')} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Text className='text-center text-white'> Se connecter </Text>
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
                                      ou continuer avec
                                  </Text>
                              </View>
                          </View>

                          <View className="top-5 flex flex-row justify-center gap-3">
                              <View>
                                  <TouchableOpacity 
                                      className="w-10 flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                      <Image style={{width: 20, height: 20}} source={images.facebook}/>
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

export default SignIn
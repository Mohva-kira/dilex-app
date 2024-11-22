import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Redirect } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './(root)/(tabs)/home';
import Profile from './(root)/profile';
import ProductDetails from './(root)/(product)/[id]';
import Cart from './(root)/cart';

const Stack = createStackNavigator()

export default function HomeScreen() {
  return(
  <>
          <Redirect href={'/(auth)/welcome'} />
   
  </>
  )
}



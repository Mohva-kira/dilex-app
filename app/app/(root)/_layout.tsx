import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from './(product)/[id]';
import Profile from './profile';
import Cart from './cart';
import { Stack } from 'expo-router';
import LayoutTabs from './(tabs)/_layout';
import payment from './payment';
import { Provider } from 'react-redux'
import { store } from '@/redux/store';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Product: { id: string };
  Cart: { userId: string };
  payment: { userId: string };
};
const Layout = () => {

  const Stacks = createStackNavigator()
  return (
    <>
    <NavigationContainer independent={true}>
      <Provider store={store}>
        <Stacks.Navigator screenOptions={{headerShown: false}}>
            <Stacks.Screen name="Home" component={LayoutTabs} />
            <Stacks.Screen name="Profile" component={Profile} />
            <Stacks.Screen name="Product" component={ProductDetails} />
            <Stacks.Screen name="Cart" component={Cart} />
            <Stacks.Screen name="payment" component={payment} />
        </Stacks.Navigator>
      </Provider>
    </NavigationContainer>
 


    </>
  )
}

export default Layout
import { icons } from '@/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from 'expo-router';
import { View, Image, ImageSourcePropType, Settings } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Products from './products';
import History from './history';
import Chat from './chat';


const TabIcon = ({source, focused} : {source: ImageSourcePropType, focused: boolean}) => (
  <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-[#895129]" : ""} `}>
    <View className={` rounded-full w-10 h-10 items-center justify-center ${focused ? 'bg-[#895129]' : ''}`}>
      <Image source={source} tintColor={'gray'} resizeMode='contain' className='w-7 h-7' />
    </View>
  </View>
)
const Stack = createStackNavigator();
const  LayoutTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
        initialRouteName='index' 
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#333333',
            borderRadius: 50,
            paddingBottom: 0,
            overflow: 'hidden',
            marginHorizontal: 20,
            marginBottom: 20,
            height: 58,
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute'

          },
          headerShown: false
        }}
        >

        <Tab.Screen
            name='home'
            component={Home}
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.home} />
            }}
          />
                
        <Tab.Screen
            name='products'
            component={Products}
            options={{
              title: 'Produits',
              headerShown: false,
              tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.shop} />
            }}
          />
        <Tab.Screen
            name='history'
            component={History}
            options={{
              title: 'Commandes',
              headerShown: false,
              tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.list} />
            }}
          />
        <Tab.Screen
            name='chat'
            component={Chat}
            options={{
              title: 'Chat',
              headerShown: false,
              tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.chat} />
            }}
          />

      
          </Tab.Navigator>
  );
}

export default LayoutTabs


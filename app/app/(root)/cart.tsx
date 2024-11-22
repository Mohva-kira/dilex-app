import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Container from '@/components/Container'
import Entypo from '@expo/vector-icons/Entypo';
import card from '../../assets/images/card.gif'
import { useNavigation } from 'expo-router';
import ModalView from '@/components/Modal';
import Payment from './payment';

const Cart = () => {
    const navigation = useNavigation()
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const onAddSticker = () => {
        setIsModalVisible(true);
      };
    
      const onModalClose = () => {
        setIsModalVisible(false);
      };
  return (
    <Container title={'Panier'}>
     
     <View className='w-full p-2 mt-5 flex flex-row justify-end'>
        
        <View className='flex w-2/3  flex-row justify-between items-center space-x-2'>
          <Text>Sous Total</Text>
          <Text className='font-bold text-lg'>25 000 <Text className='font-light text-sm'>Fcfa</Text></Text>
          
        </View>
     </View>
     <View className='w-full p-2 mt-1 flex flex-row justify-end'>
        
        <View className='flex w-2/3  flex-row justify-between items-center space-x-2'>
          <Text>Frais de livraison</Text>
          <Text className='font-bold text-lg'>1000 <Text className='font-light text-sm'>Fcfa</Text></Text>
          
        </View>

        
     </View>

     <View className='w-full p-2 mt-1 flex flex-row justify-end '>
        
        <View className='flex w-2/3 flex-row justify-between items-center space-x-2'>
          <Text>Remise</Text>
          <Text className='font-bold text-lg'>5% </Text>
          
        </View>

        
     </View>

     <View className='w-full p-2 mt-1 flex flex-row justify-between'>
        <View><Text>4 Elements</Text></View>
        <View className='flex w-2/3 flex-row justify-between items-center space-x-2'>
          <Text>Total</Text>
          <Text className='font-bold text-lg'>26 000 <Text className='font-light text-sm'>Fcfa</Text></Text>
          
        </View>
     </View>

    <View className='w-full flex items-center p-4'>
        <TouchableOpacity onPress={() => onAddSticker()} className='bg-green w-2/3 space-x-4 flex justify-center  items-center p-2  rounded-full  flex-row  '>
            <Text className='text-white text-xl font-bold'>Payer</Text>
            <View className='flex justify-end items-end  '>
                <View className='bg-white w-10  flex justify-end rounded-full p-2'>
                    <Image source={card} className='w-5 h-5 mix-blend-multiply' />
                </View>
            </View>
            
        </TouchableOpacity>
    </View>

    <View className='flex space-y-4 mt-5'>
        <View className='w-full flex flex-row justify-evenly items-center px-6'>
            <View className=' flex flex-row  '>
                <Text className='font-bold'> Intitulé</Text>
            </View>

            <View className='flex flex-row  '>
                <Text className='font-bold'> Quantité</Text>
            </View>

            <View className=' flex flex-row '>
                <Text className='font-bold'> P.U</Text>
            </View>
        </View>
        <View className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl'>
            <View className=' flex flex-row '>
                <View className='h-5 w-5 bg-primary rounded-full'></View>
                <Text className=''> Mini Box individuel </Text>
            </View>

            <View className='flex flex-row  '>
                <Text className=''>  2 </Text>
            </View>

            <View className=' flex flex-row '>
                <Text className='font-bold text-base'>  8 000</Text>
            </View>
            <View className=' flex flex-row '>
                <Entypo name="trash" size={18} color="red" />
            </View>
        </View>        

        <View className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl'>
            <View className=' flex flex-row  '>
                <View className='h-5 w-5 bg-primary rounded-full'></View>
                <Text className=''> Mini Box individuel </Text>
            </View>

            <View className='flex flex-row  '>
                <Text className=''> 2 </Text>
            </View>

            <View className=' flex flex-row '>
                <Text className='font-bold text-base'>  8 000 </Text>
            </View>

            <TouchableOpacity className=' flex flex-row '>
                <Entypo name="trash" size={18} color="red" />
            </TouchableOpacity>
        </View> 

        <View className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl'>
            <View className=' flex flex-row '>
                <View className='h-5 w-5 bg-primary rounded-full'></View>
                <Text className=''> Mini Box individuel </Text>
            </View>

            <View className='flex flex-row  '>
                <Text className=''>  2 </Text>
            </View>

            <View className=' flex flex-row '>
                <Text className='font-bold text-base'>  8 000 </Text>
            </View>
            <TouchableOpacity className=' flex flex-row '>
                <Entypo name="trash" size={18} color="red" />
            </TouchableOpacity>
        </View> 

        <View className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl'>
            <View className=' flex flex-row '>
                <View className='h-5 w-5 bg-primary rounded-full'></View>
                <Text className=''> Mini Box individuel </Text>
            </View>

            <View className='flex flex-row  '>
                <Text className=''>  2 </Text>
            </View>

            <View className=' flex flex-row '>
                <Text className='font-bold text-base'>  8 000 </Text>
            </View>
            <TouchableOpacity className='  flex flex-row '>
                <Entypo name="trash" size={18} color="red" />
            </TouchableOpacity>
        </View> 
    </View>
    <ModalView isVisible={isModalVisible} onClose={onModalClose} title={'Paiement'}>
        <Payment />
      </ModalView>
    </Container>
  )
}

export default Cart
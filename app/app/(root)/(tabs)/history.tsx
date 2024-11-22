import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '@/components/Container'
import { Entypo } from '@expo/vector-icons'
import ModalView from '@/components/Modal'
import Delivery from '../delivery'

const History = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const onAddSticker = () => {
        setIsModalVisible(true);
      };
    
      const onModalClose = () => {
        setIsModalVisible(false);
      };
      
  return (
    <Container title={'Historique'}>
     
    <View className='w-full p-2 mt-5 flex flex-row justify-between'>
       <View className='flex flex-row space-x-2 justify-center items-center'>
        <Text className='font-bold text-xl' >
            8
        </Text>
        <Text>
            Commandes
        </Text>
      </View>
       <View className='flex flex-row justify-center items-center space-x-2'>
         <Text>Total</Text>
         <Text className='font-bold text-lg'>25 000 <Text className='font-light text-sm'>Fcfa</Text></Text>
         
       </View>
    </View>

   <View className='flex space-y-4 mt-5'>
       <View  className='w-full flex flex-row justify-evenly items-center px-6'>
           <View className=' flex flex-row  '>
               <Text className='font-bold'> Intitulé</Text>
           </View>

           <View className='flex flex-row  '>
               <Text className='font-bold'> Quantité</Text>
           </View>

           
           <View className='flex flex-row  '>
               <Text className='font-bold'> Status</Text>
           </View>

           <View className=' flex flex-row '>
               <Text className='font-bold'> P.U</Text>
           </View>
       </View>
       <TouchableOpacity onPress={() => onAddSticker()} className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl '>
           <View className=' flex flex-row '>
               <View className='h-5 w-5 bg-primary rounded-full'></View>
               <Text className=''> Mini Box individuel </Text>
           </View>

           <View className='flex flex-row  '>
               <Text className=''>  2 </Text>
           </View>

           <View className=' flex flex-row '>
               <Text className='font-bold text-base'>  Payé</Text>
           </View>

           <View className=' flex flex-row '>
               <Text className='font-bold text-base'>  8 000</Text>
           </View>
           <View className=' flex flex-row '>
               <Entypo name="trash" size={18} color="red" />
           </View>
       </TouchableOpacity>        

       <View className='w-full flex flex-row justify-between bg-white p-4 rounded-2xl '>
           <View className=' flex flex-row  '>
               <View className='h-5 w-5 bg-primary rounded-full'></View>
               <Text className=''> Mini Box individuel </Text>
           </View>

           <View className='flex flex-row  '>
               <Text className=''> 2 </Text>
           </View>

           <View className=' flex flex-row '>
               <Text className='font-bold text-base'> Non Payé</Text>
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
               <Text className='font-bold text-base'> Non Payé</Text>
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
               <Text className='font-bold text-base'>  Payé</Text>
           </View>

           <View className=' flex flex-row '>
               <Text className='font-bold text-base'>  8 000 </Text>
           </View>
           <TouchableOpacity className='  flex flex-row '>
               <Entypo name="trash" size={18} color="red" />
           </TouchableOpacity>
       </View> 
       <ModalView isVisible={isModalVisible} onClose={onModalClose} title={'Livraison'}>
        <Delivery />
      </ModalView>
   </View>
  
    </Container>
  )
}

export default History
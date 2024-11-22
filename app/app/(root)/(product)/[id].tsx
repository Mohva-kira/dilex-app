import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router';
import { RouteProp, useRoute } from '@react-navigation/native';
import Container from '@/components/Container';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

// Définir la liste des paramètres de navigation
type RootStackParamList = {
  Product: { id: number };
  // Ajoutez d'autres écrans ici si nécessaire
};

const ProductDetails = () => {

 
const [qty, setQty] = useState(1)
const route = useRoute<RouteProp<RootStackParamList, 'Product'>>();
const { id } = route.params;
const router = useRouter()
const goBack = () => {
  // Navigate back one step in history
  router.back()
};
const products = useSelector((state: any) => state.products)


console.log('id', id)
console.log('products', products)
const product = products && products.value.find((item : any) => item.id === id)
console.log('le produit', product)

  return (
    <Container title={product?.title}>
      {/* <TouchableOpacity onPress={() => goBack()} ><Text>Go back </Text></TouchableOpacity> */}
      <View className='w-full h-1/4 justify-center items-center'>
         <TouchableOpacity  className='rounded-full bg-black h-64 w-64 flex items-center justify-center shadow-lg shadow-primary '>
                    <View className='rounded-full bg-mono h-60 w-60 shadow-lg shadow-primary '>

                    </View>
          </TouchableOpacity>

        
      </View>
      <View className='w-[105%] -left-2 h-screen'>
         <View className='w-full justify-center flex items-center'>
            <View className='bg-primary w-fit rounded-full text-white flex items-center flex-row justify-center space-x-5 p-4 top-10 z-50 '>
                <TouchableOpacity className='w-5' onPress={() => setQty(qty - 1)}><Text className='text-white text-xl font-bold'>-</Text></TouchableOpacity>

                <Text className='text-white font-bold text-xl'>{qty}</Text>
                <TouchableOpacity className='w-5' onPress={() => setQty(qty + 1)}><Text className='text-white text-xl font-bold'>+</Text></TouchableOpacity>

              </View>
              
          </View> 
         
          <View className='h-40 bg-primary-light   rounded-full mt-4'>
             <View className='w-full flex flex-row justify-between p-6 m-1'>
             

              <View>
                <Text>Box {product?.title}</Text>
                <Text className='text-2xl font-bold'>Box dejeuner</Text>
              </View>
              <View>
                <Text  className='text-2xl font-bold'>{Number(product.price).toLocaleString()} Fcfa</Text>
              </View>
            </View>
          </View>
          <View className='h-2/5 bg-primary-light  -top-20'>
          <View className='w-full flex items-center '>
            <View className={`${product.disponible ? 'bg-green' : 'bg-black' }  rounded-full w-36 p-1`}>
            <Text className=' text-center  text-white '> {product?.disponible ? "Disponible" : "Non disponible"}</Text>
            </View>
            </View>
          
             <View className='w-full flex flex-row justify-between p-2 px-4'>
                  <View className='flex flex-row space-x-2'>
                  <FontAwesome name="star" size={24} color="yellow" />
                    <Text>4.8</Text>
                  </View>

                  <View className='flex flex-row space-x-2'>
                    <MaterialIcons name="delivery-dining" size={24} color="blue" />
                    <Text>20 min</Text>
                  </View>

                  <View className='flex flex-row space-x-2'>
                  <Ionicons name="flame" size={24} color="red" />
                  
                  <Text>150 Kcal</Text>
                  </View>
                </View>

                <View className='p-2 px-4'>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus ea sed quibusdam tempore ullam! Ratione deserunt iusto ullam velit! Iusto officia cum dolorum! Saepe dolorum vel non cum iste!
                  </Text>
                </View>

                <View>
                  <Text className='pl-4 text-lg font-bold'> Contenus Box </Text>

                  <View className='p-4 flex flex-row space-x-2 '>
                    {product?.Composant?.map((item: any) => 
                        <TouchableOpacity className='bg-yellow p-2 rounded-full '>
                        <Text className='text-md text-black '>
                          {item.quantity} {item.libelle}
                        </Text>
                      </TouchableOpacity>
                    )}
                 
                     
                    </View>
                </View>
                <View className='w-full justify-center flex  items-center'>
                  {product.disponible && 
                   <TouchableOpacity className='bg-dark-green p-4 flex flex-row justify-center items-center space-x-4 rounded-full '>
                      <Text className='text-white text-xl'>Ajouter {qty} au panier</Text>
                      <EvilIcons name="cart" size={30} color="white" />

                    </TouchableOpacity>
                  }
                 

                </View>
               
          </View>
      
      </View>
        
    </Container>
  )
}

export default ProductDetails
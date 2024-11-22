import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'
import { getProducts, useGetAllProductQuery } from '@/redux/productApi'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  
  const {data, isSuccess, isLoading, isFetching, isError, error} = useGetAllProductQuery('')
  isFetching && console.log('fetching', isFetching)
  console.log('Data', JSON.stringify(data?.data[0]?.image[0].url))
  isError && console.log('isError', error)
  isSuccess && dispatch(getProducts(data.data)) 
  const products = useSelector((state: any) => state.products)

  console.log('products', products)
  return (
    <Container title={"Produits"}>
      <ScrollView className=' mb-24'  >

      <View className='bg-dark-blue rounded-xl'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Petit dej  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { data?.data.map((item: { title: any , image: any, price: string, description : string, nb_piece: string, id: number}) => <ProductCard id={item.id} description={item.description} title={item.title} image={item?.image[0].url} price={item.price} nb_piece={item.nb_piece} />)

          }
          </View>
        </View>

        <View className='bg-dark-blue mt-5 rounded-xl'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Mini Box  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { [0,1,2,3,4,5].map(item => <ProductCard />)

          }
          </View>
        </View>

        <View className='bg-dark-blue rounded-xl mt-5'>
          <Text style={{
            textShadowColor: 'rgba(0, 0, 0, 0.8)', 
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 4,
          }} className='text-white text-center text-xl font-bold shadow-md shadow-black'> Plateaux  </Text>
          <View className=' flex flex-row flex-wrap p-2 w-full justify-around space-x-2 space-y-2'>

           
          { [0,1,2,3,4,5].map(item => <ProductCard />)

          }
          </View>
        </View>

       
      </ScrollView>
    </Container>
  )
}

export default Products
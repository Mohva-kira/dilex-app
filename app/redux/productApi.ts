// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env';
// Define a service using a base URL and expected endpoints
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ProductState {
  value:[] 
}

const initialState: ProductState = {
  value: [],
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { getProducts, } = productsSlice.actions

export default productsSlice.reducer


console.log('API URL', API_URL)
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProductByName: builder.query<any, string>({
      query: (name) => `/products/${name}?populate=*`,
    }),
    getAllProduct: builder.query({
        query: () => `/products?populate=*`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery, useGetAllProductQuery } = productApi
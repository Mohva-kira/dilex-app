import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './productApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import  productsReducer from './productApi'

export const store = configureStore({
  reducer: {
    products: productsReducer ,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        productApi.middleware,


    ),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
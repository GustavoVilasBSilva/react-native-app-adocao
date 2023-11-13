import AsyncStorage from '@react-native-async-storage/async-storage'

import { persistReducer, persistStore } from 'redux-persist'

import { userSlice } from './reducer/slice'

import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer']
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
  reducer: { user: persistedReducer },
  middleware: [thunk]
})

export const persistor = persistStore(store)

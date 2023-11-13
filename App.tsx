import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import MainNavigation from './src/navigators/MainStack'

import { persistor, store } from './src/store'

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

import { type ParamListBase } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Texts from '../components/Texts'

import { useTheme, styled, theme as themeStyled } from '../config/stitches'

import HomeScreen from '../pages/HomeScreen/HomeScreen'
import InfoScreen from '../pages/InfoScreen/InfoScreen'
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import { useAppDispatch } from '../store/hooks/useAppDispatch'
import { logoutAction } from '../store/reducer/actions'

const PressableStyle = styled('Pressable', {
  width: themeStyled.sizes.lg,
  height: themeStyled.sizes.lg,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: themeStyled.space.xs
})

const MainStack = createStackNavigator<ParamListBase>()

const MainNavigation = (): JSX.Element => {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleLogout = (): void => {
    dispatch(logoutAction())
  }

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: () => (
            <>
              <Texts size="dp1" font="titleB" color="white" height="dp2">
                Log in to your account
              </Texts>
              <Texts font="base" size="base" color="white" height="lg">
                Welcome to the Adoption App!!!
              </Texts>
              <Texts font="base" size="base" color="white" height="lg">
                Log in to access the adoption dashboard.
              </Texts>
            </>
          ),
          headerStyle: {
            shadowColor: theme.colors.blue,
            backgroundColor: theme.colors.blue,
            height: 228
          }
        }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Texts font="titleB" color="white" size="lg">
              Adoption Dashboard
            </Texts>
          ),
          headerTitleAlign: 'left',
          headerStyle: {
            height: 64,
            backgroundColor: theme.colors.blue
          },
          headerRight: () => (
            <PressableStyle onPress={handleLogout}>
              <Icon name="exit-to-app" size={28} color={theme.colors.white} />
            </PressableStyle>
          )
        }}
      />
      <MainStack.Screen
        options={{
          headerLeft: () => null,
          headerTitle: () => (
            <Texts font="titleB" color="white" size="lg">
              Animal information
            </Texts>
          ),
          headerRight: () => (
            <PressableStyle onPress={handleLogout}>
              <Icon name="exit-to-app" size={28} color={theme.colors.white} />
            </PressableStyle>
          ),
          headerTitleAlign: 'left',
          headerStyle: {
            height: 64,
            backgroundColor: theme.colors.blue
          }
        }}
        name="Info"
        component={InfoScreen}
      />
    </MainStack.Navigator>
  )
}

export default MainNavigation

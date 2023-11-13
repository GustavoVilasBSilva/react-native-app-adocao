import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { Button } from '../../components/Button'
import Input from '../../components/Input'
import Spaces from '../../components/Spaces'
import Texts from '../../components/Texts'

import AllowedEmails from '../../config/allowed-emails'
import { useTheme } from '../../config/stitches'

import { type screenProp } from '../../types/ScreenPropsStack'

import * as S from './LoginScreen.styles'

import { useAppDispatch } from '../../store/hooks/useAppDispatch'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { loginAction } from '../../store/reducer/actions'

const LoginScreen = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { email } = useAppSelector((store) => store.user)

  const theme = useTheme()
  const navigation = useNavigation<screenProp>()

  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log(email)

  const handleLoginForm = (): void => {
    setIsLoading(true)
    if (AllowedEmails.find((item) => item.email === emailValue) != null) {
      dispatch(loginAction(emailValue))
      navigation.navigate('Home')
    } else {
      setError(true)
    }
    setIsLoading(false)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Spaces direction="column" gap={8}>
            <Texts font="baseMd" color="black" size="md" height="lg">
              Email
            </Texts>
            <Input
              onPressIn={() => {
                setError(false)
              }}
              error={error}
              onChange={(t) => {
                setEmailValue(t)
              }}
              value={emailValue}
              placeholder="Enter your Email..."
            />
            <Texts font="baseMd" color="black" size="md" height="lg">
              Password
            </Texts>
            <Input
              onPressIn={() => {
                setError(false)
              }}
              error={error}
              secure
              onChange={(t) => {
                setPassword(t)
              }}
              value={password}
              placeholder="Enter your password..."
            />
          </Spaces>
          <View style={{ height: theme.sizes.dp1 }}>
            <Button.Root type="base" onPress={handleLoginForm}>
              {isLoading && <ActivityIndicator color={theme.colors.white} />}
              <Button.Text type="base">Log in</Button.Text>
            </Button.Root>
          </View>
        </View>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginScreen

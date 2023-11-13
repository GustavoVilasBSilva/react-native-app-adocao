/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

import ListItem from '../../components/ListItem'
import Texts from '../../components/Texts'

import { useApi } from '../../libs/useApi'

import { apiUrl } from '../../config/api-url'
import { useTheme } from '../../config/stitches'

import { type AnimalResponseArray } from '../../types/AnimalType'
import { type screenProp } from '../../types/ScreenPropsStack'

import { useAppSelector } from '../../store/hooks/useAppSelector'
import * as S from './HomeScrren.style'

const HomeScreen = (): JSX.Element => {
  const { email } = useAppSelector((store) => store.user)

  const api = useApi()
  const navigation = useNavigation<screenProp>()
  const theme = useTheme()

  const [isActived, setIsActived] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<AnimalResponseArray>()

  const handleSetActivedButton = (id: number) => {
    setIsActived(id)
  }

  const handleResquestNewAnimals = async (url: string, key: string) => {
    setIsLoading(true)
    setData([])
    try {
      const res = await api.getAllAnimalsByUrl(url, key)
      setData(res.data)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  console.log(email)

  const handleViewMore = (url: string, key: string, id: string) => {
    navigation.navigate('Info', { url, key, id })
  }

  useEffect(() => {
    const res = api.authEmail(email)
    if (!res) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    }
  }, [email])

  useEffect(() => {
    handleResquestNewAnimals(apiUrl[0].url, apiUrl[0].apikey)
  }, [])

  return (
    <>
      <S.Container>
        <S.Title>
          <Texts
            align="center"
            color="black"
            font="titleB"
            height="dp2"
            size="dp1"
          >
            Animals for adoption
          </Texts>
        </S.Title>
      </S.Container>
      <View>
        <FlatList
          numColumns={apiUrl.length}
          data={apiUrl}
          renderItem={({ item }) => {
            const { id, name, url, apikey } = item
            return (
              <S.Button
                disabled={isLoading}
                loading={isLoading && id === isActived && 'true'}
                onPress={() => {
                  handleSetActivedButton(id)
                  void handleResquestNewAnimals(url, apikey)
                }}
                active={id === isActived ? 'actived' : 'disabled'}
              >
                <S.Text active={id === isActived ? 'actived' : 'disabled'}>
                  {name}
                </S.Text>
              </S.Button>
            )
          }}
        />
      </View>

      <S.ContainerList>
        {data && data.length > 0 && (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <ListItem
                  onPress={() => {
                    handleViewMore(
                      apiUrl[isActived].url,
                      apiUrl[isActived].apikey,
                      item.id
                    )
                  }}
                  breeds={item.breeds}
                  image={item.url}
                />
              )
            }}
          />
        )}
        {data && data.length === 0 && (
          <S.Loading>
            <ActivityIndicator color={theme.colors.greyishBlue} size={48} />
          </S.Loading>
        )}
      </S.ContainerList>
    </>
  )
}
export default HomeScreen

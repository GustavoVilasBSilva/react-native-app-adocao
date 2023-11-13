/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Image } from 'react-native'

import { Button } from '../../components/Button'
import Texts from '../../components/Texts'

import { useApi } from '../../libs/useApi'
import { useFormatter } from '../../libs/useFormatter'

import { type AnimalType } from '../../types/AnimalType'
import { type screenProp } from '../../types/ScreenPropsStack'

import * as S from './InfoScreen.style'

const InfoScreen = (): JSX.Element => {
  const navigation = useNavigation<screenProp>()
  const router = useRoute<any>()
  const formatter = useFormatter()
  const api = useApi()

  const [data, setData] = useState<AnimalType>()

  const handleBackButton = (): void => {
    navigation.goBack()
  }

  const handleToAdopt = (): void => {
    Alert.alert(
      'Adoption request sent.',
      'Your adoption request has been successfully sent, and you will receive a confirmation email.'
    )
    navigation.navigate('Home')
  }

  const handleRequestAnimal = async (url: string, key: string, id: string) => {
    try {
      const res = await api.getAnimalById(url, key, id)
      setData(res.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    handleRequestAnimal(router.params.url, router.params.key, router.params.id)
  }, [])

  return (
    <S.Container>
      <S.Content>
        {data != null && data.url !== '' && (
          <S.Wrapper>
            <S.ImageContainer>
              <Image
                style={{ width: 124, height: 124 }}
                source={{ uri: data?.url }}
              />
            </S.ImageContainer>
          </S.Wrapper>
        )}
        <S.Wrapper>
          <S.Info>
            <Texts font="titleB" size="md" height="lg" color="black">
              Name
            </Texts>
            <S.Label>
              {data != null && data.breeds.length > 0 && (
                <Texts size="base" font="baseB" height="lg" color="black">
                  {formatter.listBreedsName(data.breeds)}
                </Texts>
              )}
            </S.Label>
          </S.Info>
          <S.Info>
            <Texts font="titleB" size="md" height="lg" color="black">
              Age
            </Texts>
            <S.Label>
              {data != null && data.breeds.length > 0 && (
                <Texts size="base" font="baseB" height="lg" color="black">
                  {formatter.primaryItem(data.breeds).life_span}
                </Texts>
              )}
            </S.Label>
          </S.Info>
        </S.Wrapper>
        <S.Wrapper>
          <S.Info>
            <Texts font="titleB" size="md" color="black">
              Weight metric
            </Texts>
            <S.Label>
              <Texts size="base" height="lg" font="baseB" color="black">
                {data != null && data.breeds.length > 0 && (
                  <Texts size="base" font="baseB" color="black">
                    {formatter.primaryItem(data.breeds).weight.metric}
                  </Texts>
                )}
              </Texts>
            </S.Label>
          </S.Info>
          <S.Info>
            <Texts font="titleB" size="md" height="lg" color="black">
              {data != null &&
              (formatter.primaryItem(data.breeds).bred_for ?? '') !== ''
                ? 'Good for'
                : 'Origin'}
            </Texts>
            <S.Label>
              <Texts size="base" height="lg" font="baseB" color="black">
                {data != null && data.breeds.length > 0 && (
                  <Texts size="base" font="baseB" color="black">
                    {formatter.primaryItem(data.breeds).bred_for ?? ''}
                    {formatter.primaryItem(data.breeds).origin ?? ''}
                  </Texts>
                )}
              </Texts>
            </S.Label>
          </S.Info>
        </S.Wrapper>
        <S.Wrapper>
          <S.Info>
            <Texts font="titleB" size="md" color="black">
              Temperament
            </Texts>
            <S.Label>
              {data != null && data.breeds.length > 0 && (
                <Texts size="base" font="baseB" height="lg" color="black">
                  {formatter.primaryItem(data.breeds).temperament}
                </Texts>
              )}
            </S.Label>
          </S.Info>
        </S.Wrapper>
      </S.Content>
      <S.ContainerButton>
        <Button.Root type="ghost" onPress={handleBackButton}>
          <Button.Text type="ghost">Back</Button.Text>
        </Button.Root>

        <Button.Root type="base" onPress={handleToAdopt}>
          <Button.Text type="base">To adopt</Button.Text>
        </Button.Root>
      </S.ContainerButton>
    </S.Container>
  )
}

export default InfoScreen

import React from 'react'
import { Image, View } from 'react-native'

import { useFormatter } from '../libs/useFormatter'

import { styled, theme } from '../config/stitches'

import { type BreedsArray } from '../types/BreedsType'

import Texts from './Texts'

interface Props {
  image: string
  breeds: BreedsArray
  onPress: () => void
}

const Container = styled('Pressable', {
  marginVertical: theme.space.xs,
  marginHorizontal: theme.space.base,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderRadius: theme.radii.md,
  borderColor: theme.colors.lightGray,
  overflow: 'hidden',
  borderWidth: 1
})

const Content = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingHorizontal: theme.space.base,
  flex: 1
})

const ButtonFake = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.blue,
  paddingHorizontal: theme.space.base,
  height: theme.sizes.md,
  borderRadius: theme.radii.sm,
  width: 124,
  marginTop: theme.space.sm
})

const ListItem = ({ image, breeds, onPress }: Props): JSX.Element => {
  const formatter = useFormatter()

  return (
    <Container onPress={onPress}>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      <Content>
        <View>
          <Texts font="titleB" color="greyishBlue" size="lg" height="xlg">
            {formatter.listBreedsName(breeds)}
          </Texts>
          <Texts font="baseMd" color="black" size="sm" height="md">
            Age:{' '}
            {formatter.primaryItem(breeds)?.life_span.length > 0
              ? formatter.primaryItem(breeds)?.life_span.replace(' years', '')
              : 'Sem Informações'}
          </Texts>
          <ButtonFake>
            <Texts color="white" font="baseB" height="lg">
              View more
            </Texts>
          </ButtonFake>
        </View>
      </Content>
    </Container>
  )
}

export default ListItem

import React from 'react'
import { View } from 'react-native'

import { styled, theme } from '../config/stitches'

interface Props {
  placeholder: string
  value: string
  onChange: (t: string) => void
  secure?: boolean
  error: boolean
  onPressIn?: () => void
}

const StyleInput = styled('TextInput', {
  borderColor: theme.colors.gray,
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: theme.radii.md,
  fontSize: theme.fontSizes.base,
  paddingHorizontal: theme.space.sm,
  height: theme.sizes.dp1,

  variants: {
    error: {
      active: {
        borderColor: theme.colors.danger
      },
      disable: {}
    }
  }
})

const Input = ({
  error,
  placeholder,
  value,
  onChange,
  secure,
  onPressIn
}: Props): JSX.Element => {
  return (
    <View>
      <StyleInput
        onPressIn={onPressIn}
        error={error ? 'active' : 'disable'}
        secureTextEntry={secure}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
    </View>
  )
}

export default Input

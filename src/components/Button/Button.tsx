import React, { type ReactNode } from 'react'

import { styled, theme } from '../../config/stitches'

const StyleButton = styled('Pressable', {
  flex: 1,
  height: theme.sizes.dp1,
  borderRadius: theme.radii.base,
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    type: {
      base: {
        backgroundColor: theme.colors.blue,
        borderRadius: theme.radii.base
      },
      ghost: {
        backgroundColor: theme.colors.transparent,
        borderWidth: 2,
        borderColor: theme.colors.blue
      }
    }
  }
})

const TextStyle = styled('Text', {
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.lg,
  fontFamily: theme.fonts.baseB,
  color: theme.colors.white,

  variants: {
    type: {
      base: { color: theme.colors.white },
      ghost: { color: theme.colors.blue }
    }
  }
})

interface PropsRoot {
  children: ReactNode
  onPress: () => void
  type: 'ghost' | 'base'
}

interface PropsText {
  children: ReactNode
  type: 'ghost' | 'base'
}

export const ButtonRoot = ({
  children,
  onPress,
  type
}: PropsRoot): JSX.Element => {
  return (
    <StyleButton type={type} onPress={onPress}>
      {children}
    </StyleButton>
  )
}

export const ButtonText = ({ children, type }: PropsText): JSX.Element => {
  return <TextStyle type={type}>{children}</TextStyle>
}

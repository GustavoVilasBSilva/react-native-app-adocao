import { ActivityIndicator } from 'react-native'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

import { styled, theme } from '../../config/stitches'

export const Container = styled('View', {
  backgroundColor: theme.colors.white,
  paddingVertical: theme.space.lg,
  paddingHorizontal: theme.space.md
})

export const Title = styled('View', {
  textAlign: 'center',
  marginBottom: theme.space.sm
})

export const HeaderList = styled('View', {
  height: theme.sizes.dp1,
  borderWidth: 2,
  borderColor: theme.colors.greyishBlue,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  justifyContent: 'center',
  paddingHorizontal: theme.space.base
})

export const ItemList = styled('View', {
  justifyContent: 'center'
})

export const ContainerList = styled('View', {
  flex: 1,
  paddingVertical: theme.space.base,
  backgroundColor: theme.colors.white
})

export const Button = styled('Pressable', {
  display: 'flex',
  flexDirection: 'row',
  gap: theme.space.base,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: theme.sizes.dp1,
  variants: {
    active: {
      actived: { backgroundColor: theme.colors.blue },
      disabled: { backgroundColor: theme.colors.lightGray }
    },
    loading: {
      true: {
        backgroundColor: theme.colors.greyishBlue,
        opacity: 0.7
      }
    }
  }
})

export const Text = styled('Text', {
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.lg,
  fontFamily: theme.fonts.baseB,

  variants: {
    active: {
      actived: {
        color: theme.colors.white
      },
      disabled: {
        color: theme.colors.black
      }
    }
  }
})

export const Loading = styled('View', {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})

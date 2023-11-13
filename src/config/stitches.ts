import themeConfig from './theme'

import { createStitches } from 'stitches-native'

export const { styled, theme, css, useTheme, ThemeProvider, createTheme } =
  createStitches({
    theme: themeConfig
  })

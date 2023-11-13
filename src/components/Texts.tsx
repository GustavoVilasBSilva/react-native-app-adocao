import React, { type ReactNode } from 'react'

import { styled } from '../config/stitches'
type Sizes = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xlg' | 'dp1'
type Heights = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xlg' | 'dp1' | 'dp2'
type Colors = 'blue' | 'black' | 'white' | 'gray' | 'greyishBlue'
type Fonts =
  | 'base'
  | 'baseMd'
  | 'baseB'
  | 'title'
  | 'titleMd'
  | 'titleSm'
  | 'titleB'

interface Props {
  children: ReactNode
  font: Fonts
  size?: Sizes
  height?: Heights
  color?: Colors
  align?: 'center' | 'left' | 'right'
}

const StyleText = styled('Text')

const Texts = ({
  children,
  font,
  size,
  height,
  color,
  align
}: Props): JSX.Element => {
  return (
    <StyleText
      css={{
        textAlign: align,
        fontFamily: `$${font}`,
        fontSize: `$${size}`,
        lineHeight: `$${height}`,
        color: `$${color}`
      }}
    >
      {children}
    </StyleText>
  )
}

export default Texts

import React, { type ReactNode } from 'react'

import { styled } from '../config/stitches'

interface Props {
  children: ReactNode
  gap: number
  direction: 'column' | 'row'
}

const StyleSpace = styled('View', {
  display: 'flex'
})

const Spaces = ({ children, gap, direction }: Props): JSX.Element => {
  return (
    <StyleSpace css={{ flexDirection: direction, gap }}>{children}</StyleSpace>
  )
}

export default Spaces

import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../Shared'

import {
  Container
} from './styles'

export const ShipMint = () => {
  const theme = useTheme()

  return (
    <Container>
      <img src={theme.images.shipBg} alt='' />
      <Button>mint</Button>
    </Container>
  )
}

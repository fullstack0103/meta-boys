import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../Shared'
import {
  MintContainer,
  MintContent,
  ContentBox
} from './styles'

export const Mint = () => {
  const theme = useTheme()

  return (
    <MintContainer
      bgimage={theme.images.mintHero}
      id='mint'
    >
      <MintContent>
        <ContentBox>
          <h1>NFT collection of 10101 boys categorized in different levels of rarity</h1>
          <Button>mint</Button>
        </ContentBox>
      </MintContent>
    </MintContainer>
  )
}
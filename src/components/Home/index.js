import React from 'react'
import { Mint } from '../Mint'
import { Project } from '../Project'

import { Team } from '../Team'
import { ShipMint } from '../ShipMint'
import { InfiniteMarquee } from '../InfiniteMarquee'
import { FAQ } from '../FAQ'
import { useTheme } from 'styled-components'

import {
  HomeContainer
} from './styles'
import { RoadMap } from '../RoadMap'

export const Home = (props) => {
  const theme = useTheme()

  return (
    <HomeContainer bgimage={theme.images.bgImage}>
      <Mint />
      <Project />
      <InfiniteMarquee />
      <RoadMap />
      <Team />
      <ShipMint />
      <InfiniteMarquee />
      <FAQ />
    </HomeContainer>
  )
}

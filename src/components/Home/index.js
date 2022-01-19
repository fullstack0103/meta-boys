import React from 'react'
import { Mint } from '../Mint'
import { Project } from '../Project'

import { Team } from '../Team'
import { ShipMint } from '../ShipMint'
import { InfiniteMarquee } from '../InfiniteMarquee'
import { FAQ } from '../FAQ'

import {
} from './styles'

export const Home = (props) => {
  return (
    <>
      <Mint />
      <Project />
      <InfiniteMarquee />

      <Team />
      <ShipMint />
      <InfiniteMarquee />
      <FAQ />
    </>
  )
}

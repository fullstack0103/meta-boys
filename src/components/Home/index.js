import React from 'react'
import { Mint } from '../Mint'
import { Project } from '../Project'

import { FAQ } from '../FAQ'

import {
} from './styles'
import { RoadMap } from '../RoadMap'

export const Home = (props) => {
  return (
    <>
      <Mint />
      <Project />
      <RoadMap />

      <FAQ />
    </>
  )
}

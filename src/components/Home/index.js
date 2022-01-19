import React from 'react'
import { Mint } from '../Mint'
import { Project } from '../Project'

import { FAQ } from '../FAQ'

import {
} from './styles'

export const Home = (props) => {
  return (
    <>
      <Mint />
      <Project />

      <FAQ />
    </>
  )
}

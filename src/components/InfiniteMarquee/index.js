import React from 'react'
import { useTheme } from 'styled-components'

import {
  MarqueeContainer
} from './styles'

export const InfiniteMarquee = () => {
  const theme = useTheme()
  return (
    <MarqueeContainer>
      <div className='track'>
        <div className='content'>
          {[...Array(50).keys()].map(i => (
            <img
              key={i}
              src={theme.logos.textLogo}
              alt=''
            />
          ))}
        </div>
      </div>
    </MarqueeContainer>
  )
}
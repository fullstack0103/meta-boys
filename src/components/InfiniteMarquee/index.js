import React from 'react'

import {
  MarqueeContainer
} from './styles'

export const InfiniteMarquee = () => {
  return (
    <MarqueeContainer>
      <div className='track'>
        <div className='content'>
          {[...Array(50).keys()].map(i => (
            <span key={i}>meta boys</span>
          ))}
        </div>
      </div>
    </MarqueeContainer>
  )
}
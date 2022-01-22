import React from 'react'
import {
  CircleProgressBarContainer
} from './styles'

export const CircleProgressBar = (props) => {
  const { percent } = props

  return (
    <>
      <CircleProgressBarContainer percent={percent} data-aos='fade'>
        <div className='skill'>
          <div className='outer'>
            <div className='inner'>
              <div className='number'>
                {percent}%
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="80px" height="80px">
            <defs>
              <linearGradient>
                <stop offset="0%" stopColor='#e91e63' />
                <stop offset="100%" stopColor='#e91e63' />
              </linearGradient>
            </defs>
            <circle cx='40' cy='40' r='35' strokeLinecap='round' />
          </svg>
        </div>
      </CircleProgressBarContainer>
    </>
  )
}

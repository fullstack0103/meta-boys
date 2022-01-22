import React, { useEffect, useState } from 'react'
import {
  CircleProgressBarContainer
} from './styles'

export const CircleProgressBar = (props) => {
  const { percent } = props
  return (
    <>
    <CircleProgressBarContainer percent={percent}>
      <div className='skill'>
        <div className='outer'>
          <div className='inner'>
            <div id='number'>
              {percent}%
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version='1.1' width="80px" height="80px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor='#e91e63' />
              <stop offset="100%" stopColor='#e91e63' />
            </linearGradient>
          </defs>
          <circle cx='40' cy='40' r='35' stroke-linecap='round' />
        </svg>
      </div>
    </CircleProgressBarContainer>
    </>
  )
}
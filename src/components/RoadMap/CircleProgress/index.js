import React from 'react'
import {
  CircleProgressContainer
} from './styles'

export const CircleProgress = (props) => {
  const {
    percent
  } = props

  return (
    <CircleProgressContainer>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> {percent}% </div>
        </div>
      </div>
    </CircleProgressContainer>
  )
}

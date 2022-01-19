import React from 'react'
import {
  CircleProgressContainer
} from './styles'

export const CircleProgress = (props) => {
  const {
    percent
  } = props

  return (
    <CircleProgressContainer percent={percent}>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> {percent}% </div>
        </div>
      </div>
    </CircleProgressContainer>
  )
}

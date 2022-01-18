import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: radial-gradient(191.99% 200.52% at 8.37% 0%, rgba(16, 15, 23, 0.36) 0%, rgba(68, 67, 74, 0.294483) 86.29%, rgba(255, 255, 255, 0.06) 100%);
  backdrop-filter: blur(15px);
`

export const GradientCard = (props) => {
  return (
    <CardContainer>
      {props.children}
    </CardContainer>
  )
}

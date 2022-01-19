import React from 'react'
import styled, { css } from 'styled-components'

export const FAQContainer = styled.div`
  padding: 120px 15px;
`
export const InnerContainerStyled = styled.div`
  max-width: 1184px;
  margin: 0px auto;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const InnerContainer = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <InnerContainerStyled {...props} style={style}>
      {props.children}
    </InnerContainerStyled>
  )
}

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.div`
  position: relative;
  
  > div {
    position: absolute;
    width: 110px;
    height: 40px;
    right: -43px;
    top: 7px;
    backdrop-filter: blur(7px);
  }
  > h1 {
    font-size: 63px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    > h1 {
      font-size: 85px;
    }
    > div {
      width: 166px;
      height: 51px;
      right: -73px;
      top: 10px;

    }
  }
`
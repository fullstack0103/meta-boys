import React from 'react'
import styled, { css } from 'styled-components'

export const FAQContainer = styled.div`
  padding: 20px 15px;

  @media (min-width: 768px) {
    padding: 30px 15px 80px 15px;
  }
  @media (min-width: 1440px) {
    padding: 45px 15px 120px 15px;
  }
`
export const InnerContainerStyled = styled.div`
  margin: 0px auto;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: contain;
    background-position: center;
  `}

  @media (min-width: 768px) {
    max-width: 1184px;
    width: 80%;
  }
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
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media (min-width: 992px) {
    margin-bottom: 100px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`

export const Title = styled.div`
  position: relative;
  
  > div {
    position: absolute;
    width: 70px;
    height: 25px;
    right: -25px;
    top: 5px;
    backdrop-filter: blur(7px);
  }
  > h1 {
    font-size: 42px;
    margin: 0;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 63px;
    }

    > div {
      width: 110px;
      height: 40px;
      right: -43px;
      top: 7px;
    }
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

export const QuestionContainer = styled.div`
  margin-bottom: 30px;
  
  > div {
    padding: 18px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 40px;
    > div {
      padding: 18px 45px;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 50px;

    > div {
      padding: 24px 60px;
    }
  }
`

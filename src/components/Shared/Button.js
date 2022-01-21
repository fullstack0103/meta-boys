import React from 'react'
import styled, { css, useTheme } from 'styled-components'

const ButtonContentWrapper = styled.div`
  cursor: pointer;
  background: radial-gradient(191.99% 200.52% at 8.37% 0%, rgba(100, 0, 96, 0.36) 0%, rgba(55, 1, 53, 0.07) 100%);
  box-shadow: 0px 5.41544px 85px rgba(255, 0, 199, 0.8);
  backdrop-filter: blur(20.3079px);
  width: 228px;
  height: 50px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonOuterGlowContainer = styled.div`
  width: 234px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @keyframes glow {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  &:hover {
    > div {
      background: #100f17;
    }
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: glow 1.2s linear infinite;

  }
`
export const ButtonContainerStyled = styled.div`
  width: 277px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const ButtonContainer = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ButtonContainerStyled {...props} style={style}>
      {props.children}
    </ButtonContainerStyled>
  )
}

export const Button = (props) => {
  const theme = useTheme()

  return (
    <ButtonContainer bgimage={theme.images.buttonBg}>
      <ButtonOuterGlowContainer>
        <ButtonContentWrapper>
          {props.children}
        </ButtonContentWrapper>
      </ButtonOuterGlowContainer>
    </ButtonContainer>
  )
}

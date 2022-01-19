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
  transition: all 0.3s;
  &:hover {
    background: radial-gradient(51.99% 100.52% at 8.37% 0%, rgba(100, 0, 96, 0.36) 0%, rgba(55, 1, 53, 0.07) 100%);
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
      <ButtonContentWrapper>
        {props.children}
      </ButtonContentWrapper>
    </ButtonContainer>
  )
}

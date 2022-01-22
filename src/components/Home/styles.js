import styled, { css } from 'styled-components'

export const HomeContainerStyled = styled.div`
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const HomeContainer = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <HomeContainerStyled {...props} style={style}>
      {props.children}
    </HomeContainerStyled>
  )
}
import styled, { css } from 'styled-components'

export const MintContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  height: 570px;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const MintContainer = (props) => {
  const style = {}
  style.backgroundImage = `linear-gradient(179.92deg, #000000 0.07%, rgba(0, 0, 0, 0) 102.47%), url(${props.bgimage})`

  return (
    <MintContainerStyled {...props} style={style}>
      {props.children}
    </MintContainerStyled>
  )
}

export const MintContent = styled.div`
  width: 100%;
  padding: 15px;

  > h1 {
    font-size: 50px;
    line-height: 75px;
    margin-bottom: 52px; 
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`

export const ContentBox = styled.div`
  width: 60%;
`
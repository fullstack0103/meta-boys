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

  @media (min-width: 768px) {
    width: 80%;
  }
`

export const ContentBox = styled.div`
  width: 100%;
  
  h1 {
    font-size: 24px;
    line-height: 40px;
    margin-top: 0;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    width: 70%;
    h1 {
      font-size: 32px;
      line-height: 45px;
      margin-bottom: 42px; 
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 42px;
      line-height: 55px;
      margin-bottom: 42px; 
    }
  }

  @media (min-width: 1440px) {
    width: 60%;
    h1 {
      font-size: 55px;
      line-height: 65px;
      margin-bottom: 52px;
    }
  }
`
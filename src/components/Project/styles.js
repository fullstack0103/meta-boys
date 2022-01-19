import styled, { css } from 'styled-components'

export const ProjectContainer = styled.div`
  padding-top: 90px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.div`
  position: relative;
  
  > div {
    position: absolute;
    width: 180px;
    height: 53px;
    left: -50px;
    top: -20px
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
      width: 270px;
      height: 70px;
      left: -80px;
      top: -20px
    }
  }
`

export const ContentWrapperStyled = styled.div`
  display: flex;
  height: 700px;
  width: 90%;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: cover;
    background-position: center;
  `}

  > div {
    width: 35%;
    margin-left: 300px;
    padding: 50px;
    height: fit-content;
    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (min-width: 1440px) {
    height: 938px;
    padding-top: 250px;
    margin-top: -150px;
    > div {
      width: 37%;
      margin-left: 300px;
      padding: 50px;
    }
  }
`

export const ContentWrapper = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <ContentWrapperStyled {...props} style={style}>
      {props.children}
    </ContentWrapperStyled>
  )
}


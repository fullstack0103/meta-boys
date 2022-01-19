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
    width: 97px;
    height: 36px;
    left: -34px;
    top: -7px;
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
      width: 136px;
      height: 53px;
      left: -41px;
      top: -16px;
    }
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
  padding: 30px 15px;
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: cover;
    background-position: center;
  `}

  > div {
    padding: 20px;
    height: fit-content;

    > p {
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      span {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (min-width: 768px) {
    width: 90%;
    padding-top: 80px;
    height: 800px;

    > div {
      width: 60%;
      max-width: 450px;
      margin-left: 60px;
      padding: 50px;

      > p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 700px;
    > div {
      margin-left: 200px;
      max-width: 500px;
    }
  }

  @media (min-width: 1440px) {
    height: 938px;
    padding-top: 250px;
    margin-top: -150px;
    > div {
      margin-left: 300px;
      padding: 50px;
      max-width: 730px;

      > p {
        font-size: 20px;
        line-height: 24px;
      }
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


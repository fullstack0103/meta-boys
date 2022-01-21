import styled, { css } from 'styled-components'

export const RoadMapContainer = styled.div`
  padding-top: 90px;
`

export const BgWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
`

export const BackgroundListWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* > img {
      height: 400px;
    }

    @media (min-width: 768px) {
        > img {
          height: 650px;
        }
    }

    @media (min-width: 1440px) {
        > img {
          height: 900px;
        }
    } */
`

export const TopImage = styled.img`
  position: absolute;
  height: 700px;
  top: -30px;
  left: 0px;
  height: 600px;

  @media (min-width: 768px) {
    height: 700px;
    top: -30px;
  }

  @media (min-width: 1440px) {
    height: 900px;
    top: initial;
  }
`

export const MiddleImage = styled.img`
  position: absolute;
  height: 600px;
  bottom: 0px;
  left: 0px;
  top: initial;

  @media (min-width: 768px) {
    height: 700px;
    bottom: 0px;
    left: 0px;
    top: initial;
  }

  @media (min-width: 1440px) {
    right: 0px;
    left: initial;
    top: 350px;
    height: 900px;
  }
`

export const BottomImage = styled.img`
  position: absolute;
  height: 600px;
  bottom: initial;
  top: 430px;

  @media (min-width: 768px) {
    height: 700px;
    bottom: initial;
    top: 430px;
  }

  @media (min-width: 1440px) {
    top: initial;
    bottom: 0px;
    right: 0px;
    height: 900px;
  }
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
      top: -20px;
    }
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  @media (min-width: 768px) {
    width: 85%;
    padding: 0px;
  }
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  .gradient-box {
    width: 100%;
    max-width: 1500px;
    position: relative;
    z-index: 2;

    .gradient-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > div {
      padding: 30px;
      h1 {
        font-size: 26px;
        margin: 0;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        text-align: right;
        span {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }

  @media (min-width: 576px) {
    .gradient-box {
      width: 85%;
    }
  }

  @media (min-width: 768px) {
    margin-top: 80px;
    .gradient-box {
      width: 80%;
      > div {
        padding: 30px;
        h1 {
          font-size: 30px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
    .gradient-box {
      > div {
        padding: 47px;
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }

  ${({ isLeft }) => isLeft && css`
    .gradient-box {
      > div {
        p {
          text-align: left;
        }
      }
    }
  `}
`

export const LeftNumberWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    font-size: 100px;
    margin-left: 0px;
  }

  @media (min-width: 576px) {
    span {
      font-size: 120px;
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    span {
      font-size: 120px;
      margin-left: 25px;
    }
  }

  @media (min-width: 1440px) {
    span {
      font-size: 175px;
      margin-left: 30px;
    }
  }
`
export const RightNumberWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    font-size: 100px;
    margin-right: 0px;
  }

  @media (min-width: 576px) {
    span {
      font-size: 120px;
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    span {
      font-size: 120px;
      margin-right: 25px;
    }
  }

  @media (min-width: 1440px) {
    span {
      font-size: 175px;
      margin-right: 30px;
    }
  }
`

export const PointBox = styled.div`
  position: relative;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #100F17;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 12px;
    height: 12px;
    min-width: 12px;
    border-radius: 50%;
    background: white;
  }

  @media (min-width: 768px) {
    width: 25px;
    min-width: 25px;
    height: 25px;

    > div {
      width: 15px;
      height: 15px;
      min-width: 15px;
    }
  }

  @media (min-width: 1440px) {
    width: 28px;
    min-width: 28px;
    height: 28px;

    > div {
      width: 18px;
      height: 18px;
      min-width: 18px;
    }
  }
`

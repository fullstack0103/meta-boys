import styled, { css } from 'styled-components'

export const RoadMapContainer = styled.div`
  position: relative;
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

    > img {
      height: 500px;
    }
  }
`

export const TopImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
`

export const MiddleImage = styled.img`

`

export const BottomImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

export const ContentWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  .gradient-box {
    width: 80%;
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
        font-size: 30px;
        margin: 0;
      }
      p {
        font-weight: 300;
        font-size: 15px;
        text-align: right;
        span {
          color: ${props => props.theme.colors.primary};
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
    font-size: 175.172px;
    margin-left: 30px;
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
    font-size: 175.172px;
    margin-right: 30px;
  }
`

export const PointBox = styled.div`
  width: 28px;
  min-width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #100F17;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 18px;
    height: 18px;
    min-width: 18px;
    border-radius: 50%;
    background: white;
  }
`

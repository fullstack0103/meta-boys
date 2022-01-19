import styled from 'styled-components'

export const RoadMapContainer = styled.div`
  position: relative;
`

export const BackgroundListWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  
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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .gradient-box {
    width: 80%;

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
`
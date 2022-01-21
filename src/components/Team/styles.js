import styled, { css } from 'styled-components'

export const TeamContainer = styled.div`
  padding: 40px 15px;

  @media (min-width: 768px) {
    padding: 60px 15px;
  }
  @media (min-width: 1440px) {
    padding: 80px 15px;
  }
`
export const InnerContainer = styled.div`
  margin: 0px auto;

  @media (min-width: 768px) {
    max-width: 1365px;
    width: 80%;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media (min-width: 992px) {
    margin-bottom: 100px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }
`

export const Title = styled.div`
  position: relative;
  
  > div {
    position: absolute;
    width: 70px;
    height: 25px;
    right: -24px;
    top: 28px;
    backdrop-filter: blur(7px);
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
      width: 110px;
      height: 40px;
      right: -34px;
      top: 44px;
    }
  }
  @media (min-width: 1440px) {
    > h1 {
      font-size: 85px;
    }
    > div {
      width: 166px;
      height: 51px;
      right: -64px;
      top: 60px;
    }
  }
`
export const TeamSloganWrapper = styled.div`
  > p {
    text-align: center;
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 1440px) {
    > p {
      font-size: 20px;
      line-height: 25px;
    }
  }
`
export const TeamMemersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;

  @media (min-width: 768px) {
    margin: 50px 0;
  }

  @media (min-width: 1440px) {
    margin: 70px 0;
  }
`
export const TeamMemberContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;


  > img {
    width: 231px;
    height: 235px;
  }

  > div.info-container {
    width: 255px;
    height: 93px;
    position: absolute;
    bottom: -45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(191.99% 200.52% at 8.37% 0%, rgba(100, 0, 96, 0.36) 0%, rgba(55, 1, 53, 0.07) 100%);
    backdrop-filter: blur(20.3079px);
    > span {
      &:first-child {
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
        position: relative;
        display: flex;
        justify-content: center;
      
        &::after {
          content: "";
          position: absolute;
          background: ${props => props.theme.colors.white};
          height: 1px;
          width: 38px;
          bottom: -7px;
        }
      }
      &:last-child {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  width: calc(100% - 70px);
  margin: 70px 35px;

  @media (min-width: 768px) {
    width: calc(50% - 70px);
    margin: 70px 35px;
  }

  @media (min-width: 1024px) {
    width: calc(33.33% - 70px);
    margin: 70px 35px;
  }

  @media (min-width: 1440px) {
    width: calc(25% - 60px);
    margin: 75px 30px;
  }
`
export const Ellipse = styled.div`
  position: absolute;
  /* border: 1px solid ${props => props.theme.colors.white}; */
  z-index: -1;
  border-radius: 50%;

  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: glow 1s linear infinite;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: #100f17;
  }

  @keyframes glow {
    0% {
      filter: hue-rotate(10deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}

  ${({ index }) => index === 1 && css`
    height: 300px;
    width: 200px;
    transform: rotate(40deg);
    top: -30px;
  `}

  ${({ index }) => index === 2 && css`
    height: 280px;
    width: 150px;
    transform: rotate(297deg);
    bottom: -105px;
  `}
  ${({ index }) => index === 3 && css`
    height: 280px;
    width: 173px;
    transform: rotate(42deg);
    top: -43px;
    left: 40px;
  `}
  ${({ index }) => index === 4 && css`
    height: 300px;
    width: 180px;
    transform: rotate(311deg);
    top: -40px;
  `}
  ${({ index }) => index === 5 && css`
    height: 250px;
    width: 140px;
    transform: rotate(66deg);
    bottom: -98px;
    right: 44px;
  `}
  ${({ index }) => index === 6 && css`
    height: 250px;
    width: 140px;
    transform: rotate(49deg);
    top: -50px;
    left: 44px;
  `}
  ${({ index }) => index === 7 && css`
    height: 250px;
    width: 140px;
    transform: rotate(45deg);
    bottom: -78px;
    left: 35px;
  `}
  ${({ index }) => index === 0 && css`
    height: 300px;
    width: 180px;
    transform: rotate(45deg);
    top: -40px;
  `}
  @media (min-width: 768px) {
    ${({ index }) => index === 1 && css`
      height: 390px;
      width: 230px;
      transform: rotate(36deg);
      top: -45px;
    `}
    ${({ index }) => index === 2 && css`
      height: 300px;
      width: 170px;
      transform: rotate(297deg);
      bottom: -123px;
    `}
    ${({ index }) => index === 3 && css`
      height: 300px;
      width: 173px;
      transform: rotate(45deg);
      top: -43px;
      left: 25px;
    `}
    ${({ index }) => index === 4 && css`
      height: 330px;
      width: 210px;
      transform: rotate(311deg);
      top: -40px;
    `}
    ${({ index }) => index === 5 && css`
      height: 256px;
      width: 148px;
      transform: rotate(66deg);
      bottom: -98px;
      right: 16px;
    `}
    ${({ index }) => index === 6 && css`
      height: 256px;
      width: 148px;
      transform: rotate(49deg);
      top: -50px;
      left: 34px;
    `}
    ${({ index }) => index === 7 && css`
      height: 300px;
      width: 173px;
      transform: rotate(45deg);
      bottom: -90px;
      left: 13px;
    `}
    ${({ index }) => index === 0 && css`
      height: 330px;
      width: 210px;
      transform: rotate(45deg);
      top: -40px;
    `}
  }
`

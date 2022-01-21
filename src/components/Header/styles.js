import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 15px 0px 15px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    padding: 50px 15px 0px 15px;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 993px) {
    width: 80%;
  }
`

export const SocailWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const SocialLink = styled.a`
  cursor: pointer;
  display: flex;
  margin: 0 15px;

  svg {
    width: 25px;
    &:hover {
      path {
        fill: ${props => props.theme.colors.primary};
      }
    }
  }
`
export const LogoWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  position: absolute;
  left: 0;

  img {
    width: 160px;
  }

  @media (min-width: 768px) {
    width: initial;
    position: initial;
    img {
      width: 194px;
    }
  }
`
export const MenuListWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: relative;
    height: 30px;
    width: 118px;

    > div {
      position: absolute;
      right: 0px;
    }
  }
`

export const MenuItem = styled.div`
  font-size: 18px;
  padding: 5px;
  display: flex;
  justify-content: flex-end;

  span {
    position: relative;
    font-size: 18px;
    color: ${props => props.theme.colors.white};
    padding: 5px 20px;
    position: relative;
    display: flex;
    z-index: 10;
  }

  ${({ active }) => active && css`
    span {
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-top: 1px solid ${props => props.theme.colors.white};
        border-right: 1px solid ${props => props.theme.colors.white};
        right: -20px;
        top: 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-bottom: 1px solid ${props => props.theme.colors.white};
        border-left: 1px solid ${props => props.theme.colors.white};
        left: -20px;
        bottom: 0;
      }
    }
  `}

  @media (min-width: 1440px) {
    span {
      font-size: 24px;
    }
  }
`
export const NameWrapper = styled.div`
  padding: 2px;
  cursor: pointer;
  position: relative;

  &:hover {
    > span {
      color: ${props => props.theme.colors.primary};
      background: radial-gradient(191.99% 200.52% at 8.37% 0%, rgba(100, 0, 96, 0.36) 0%, rgba(55, 1, 53, 0.07) 100%);
      box-shadow: 0px 5.41544px 85px rgba(255, 0, 199, 0.8);
      backdrop-filter: blur(20.3079px);
    }
    > div {
      display: block;
    }
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: calc(100% + 30px);
      padding-top: 40px;
      border: 1px solid #FFF;
      transform: rotate(353deg);
      left: -15px;
      top: 0px;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      &::after {
        width: calc(100% + 40px);
        padding-top: 45px;
        left: -20px;
        top: 0px;
      }
    }
  }
`

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
  padding: 10px;
  text-align: right;

  span {
    cursor: pointer;
    position: relative;
    font-size: 18px;
    color: ${props => props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
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
    padding: 15px;
    span {
      font-size: 24px;
    }
  }
`

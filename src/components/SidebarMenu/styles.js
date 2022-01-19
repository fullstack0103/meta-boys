import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  @media (min-width: 768px) {
    display: none;
  }
`
export const IconContent = styled.button`
  position: relative;
  max-width: 100%;
  margin: 0px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background: transparent;

  &:hover {
    box-shadow: transparent 0px 0px 0px 1px inset;
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${props => props.theme.colors.white};
  }
`
export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background: ${props => props.theme.colors.backgroundPage};
`

export const MenuClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  max-width: 100%;
  margin: 6px;
  display: inline-flex;
  min-height: 35px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  user-select: none;
  text-decoration: none;
  text-align: center;
  background: transparent;
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: transparent 0px 0px 0px 1px inset;
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }

  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: ${props => props.theme.colors.white};
  }
`
export const MenuLinksWrapper = styled.div`
  padding: 20px 30px;
`
export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
`
export const SocailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
export const SocialLink = styled.a`
  margin: 0 15px;
  svg {
    width: 25px;
  }
`

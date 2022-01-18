import React from 'react'
import { useTheme } from 'styled-components'
import {
  HeaderContainer,
  HeaderContent,
  SocailWrapper,
  LogoWrapper,
  MenuList
} from './styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <HeaderContent>
        <SocailWrapper>
          <img src={theme.icons.instagram} alt='instagram' />
          <img src={theme.icons.twitter} alt='twitter' />
          <img src={theme.icons.discord} alt='discord' />
          <img src={theme.icons.other} alt='other' />
        </SocailWrapper>
        <LogoWrapper>
          <img src={theme.logos.bigLogo} alt='big-logo' />
        </LogoWrapper>
        <MenuList>
          menu
        </MenuList>
      </HeaderContent>
    </HeaderContainer>
  )
}

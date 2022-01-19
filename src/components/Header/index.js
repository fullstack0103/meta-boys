import React from 'react'
import { useTheme } from 'styled-components'
import {
  HeaderContainer,
  HeaderContent,
  SocailWrapper,
  LogoWrapper,
  MenuItem,
  MenuListWrapper
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
        <MenuListWrapper>
          <div>
            <MenuItem>MINT</MenuItem>
            <MenuItem>ROADMAP</MenuItem>
            <MenuItem>TEAM</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </div>
        </MenuListWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}

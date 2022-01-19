import React from 'react'
import { useTheme } from 'styled-components'
import { SidebarMenu } from '../SidebarMenu'
import {
  TwitterIcon,
  DiscordIcon,
  OtherIcon,
  InstagramIcon
} from '../Shared/SvgIcons'

import {
  HeaderContainer,
  HeaderContent,
  SocailWrapper,
  LogoWrapper,
  MenuItem,
  MenuListWrapper,
  SocialLink
} from './styles'

export const Header = () => {
  const theme = useTheme()

  const menuItems = [
    { id: 1, name: 'MINT', value: 'mint' },
    { id: 2, name: 'ROADMAP', value: 'roadmap' },
    { id: 3, name: 'TEAM', value: 'team' },
    { id: 4, name: 'FAQ', value: 'faq' }
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        <SidebarMenu />
        <SocailWrapper>
          <SocialLink>
            <InstagramIcon />
          </SocialLink>
          <SocialLink>
            <TwitterIcon />
          </SocialLink>
          <SocialLink>
            <DiscordIcon />
          </SocialLink>
          <SocialLink>
            <OtherIcon />
          </SocialLink>
        </SocailWrapper>
        <LogoWrapper>
          <img src={theme.logos.bigLogo} alt='big-logo' />
        </LogoWrapper>
        <MenuListWrapper>
          <div>
            {menuItems.map(menu => (
              <MenuItem
                active
                key={menu.id}
              >
                <span>{menu.name}</span>
              </MenuItem>
            ))}
          </div>
        </MenuListWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}

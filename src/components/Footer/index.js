import React from 'react'
import { useTheme } from 'styled-components'
import { TwitterIcon, DiscordIcon, OtherIcon, InstagramIcon } from '../Shared/SvgIcons'

import {
  FooterContainer,
  LinksContainer,
  SocialLinksWrapper,
  SocialLink,
  LogoWrapper,
  MenuLinksWrapper,
  MenuLink,
  Divider,
  CopyWritter
} from './styles'

export const Footer = () => {
  const theme = useTheme()
  const menuItems = [
    { id: 1, name: 'mint', value: 'mint' },
    { id: 2, name: 'roadmap', value: 'roadmap' },
    { id: 3, name: 'team', value: 'team' },
    { id: 4, name: 'faq', value: 'faq' }
  ]
  const handleClickMenu = (index) => {
    let topPos = 0
    topPos = document.getElementById(index)?.offsetTop
    window.scroll({
      top: topPos,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
      <LinksContainer>
        <SocialLinksWrapper>
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
        </SocialLinksWrapper>

        <LogoWrapper>
          <img src={theme.logos.bigLogo} alt='' />
        </LogoWrapper>

        <MenuLinksWrapper>
          {menuItems.map(menu => (
            <MenuLink
              key={menu.id}
              onClick={() => handleClickMenu(menu.value)}
            >
              {menu.name}
            </MenuLink>
          ))}
        </MenuLinksWrapper>
      </LinksContainer>
      <Divider />
      <CopyWritter>
        © 2022 META BOYS | All Rights Reserved
      </CopyWritter>
    </FooterContainer>
  )
}

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
  const menus = [
    { id: 1, name: 'mint' },
    { id: 2, name: 'roadmap' },
    { id: 3, name: 'team' },
    { id: 4, name: 'fag' },
  ]

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
          {menus.map(menu => (
            <MenuLink
              key={menu.id}
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

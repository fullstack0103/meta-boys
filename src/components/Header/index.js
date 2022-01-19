import React, { useEffect, useState } from 'react'
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
  const [selectedMenu, setSelectedMenu] = useState('')

  const menuItems = [
    { id: 1, name: 'MINT', value: 'mint' },
    { id: 2, name: 'ROADMAP', value: 'roadmap' },
    { id: 3, name: 'TEAM', value: 'team' },
    { id: 4, name: 'FAQ', value: 'faq' }
  ]

  const handleClickMenu = (index) => {
    let topPos = 0
    topPos = document.getElementById(index).offsetTop
    window.scroll({
      top: topPos,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach(menu => {
        const windowTop = window.scrollY
        let topPos = 0
        topPos = document.getElementById(menu.value).offsetTop

        if (Math.abs(windowTop - topPos) < 100) {
          setSelectedMenu(menu.value)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                active={selectedMenu === menu.value}
                key={menu.id}
                onClick={() => handleClickMenu(menu.value)}
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

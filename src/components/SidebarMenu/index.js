import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import {
  TwitterIcon,
  DiscordIcon,
  OtherIcon,
  InstagramIcon
} from '../Shared/SvgIcons'

import {
  Container,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLinksWrapper,
  MenuItem,
  SocailWrapper,
  SocialLink
} from './styles'

export const SidebarMenu = (props) => {
  const menuItems = [
    { id: 1, name: 'MINT', value: 'mint' },
    { id: 2, name: 'ROADMAP', value: 'roadmap' },
    { id: 3, name: 'TEAM', value: 'team' },
    { id: 4, name: 'FAQ', value: 'faq' }
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useWindowSize()

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '340px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  const handleMenuClick = () => {
    actionSidebar(false)
  }

  return (
    <Container>
      <IconContent
        onClick={() => actionSidebar(true)}
      >
        <IosMenu />
      </IconContent>
      <SidebarContent
        id='sidebar_menu'
      >
        <MenuClose
          aria-label='close'
          onClick={() => actionSidebar(false)}
        >
          <MdClose />
        </MenuClose>
        <MenuLinksWrapper>
          {menuItems.map(menu => (
            <MenuItem
              key={menu.id}
              // active
              onClick={() => handleMenuClick()}
            >
              {menu.name}
            </MenuItem>
          ))}
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
        </MenuLinksWrapper>
      </SidebarContent>
    </Container>
  )
}
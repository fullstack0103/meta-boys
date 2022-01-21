import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'

/**
 * Theme images
 */
import mintHero from './assets/images/mint-bg.png'
import buttonBg from './assets/images/button-bg.png'
import projectBg from './assets/images/project-bg.png'

import shipBg from './assets/images/ship.png'
import faqBg from './assets/images/faq-bg.png'
import roadMapTop from './assets/images/road-map-top.png'
import roadMapMiddle from './assets/images/road-map-middle.png'
import roadMapBottom from './assets/images/road-map-bottom.png'
import roadMapTop1 from './assets/images/road-map-top-1.png'
import roadMapMiddle1 from './assets/images/road-map-middle-1.png'
import roadMapBottom1 from './assets/images/road-map-bottom-1.png'
import roadMapOverlay from './assets/images/road-map-overlay.png'
import bgImage from './assets/images/bg-image.png'

/**
 * Theme icons
 */
import twitter from './assets/icons/twitter.png'
import instagram from './assets/icons/instagram.png'
import other from './assets/icons/other.png'
import discord from './assets/icons/discord.png'

import bigLogo from './assets/images/big-logo.png'

theme.logos = {
  bigLogo
}

theme.images = {
  mintHero,
  buttonBg,
  projectBg,
  faqBg,
  roadMapTop,
  roadMapMiddle,
  roadMapBottom,
  roadMapTop1,
  roadMapMiddle1,
  roadMapBottom1,
  shipBg,
  roadMapOverlay,
  bgImage
}

theme.icons = {
  twitter,
  instagram,
  other,
  discord
}

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)
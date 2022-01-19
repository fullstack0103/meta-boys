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
  projectBg
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
import React from 'react'
import { GradientCard } from '../Shared'
import { useTheme } from 'styled-components'
import {
  ProjectContainer,
  Title,
  TitleWrapper,
  ContentWrapper
} from './styles'

export const Project = () => {
  const theme = useTheme()

  return (
    <ProjectContainer>
      <TitleWrapper>
        <Title>
          <GradientCard />
          <h1>THE PROJECT</h1>
        </Title>
      </TitleWrapper>
      <ContentWrapper bgimage={theme.images.projectBg}>
        <GradientCard>
        MetaBoys represents a NFT collection of <span>10101</span> boys categorized in different levels of rarity. These are stored on the Ethereum blockchain and hosted on IPFS. They boast the first collection of high-quality <span>3D human</span> models, and have a range of styles, expressions, outfits, and over 200 other features. 
MetaBoys also contains the most stylish avatars in the Metaverse.
Each NFT provides access to the world's most exclusive business community, where dedicated entrepreneurs and investors, wanting to learn from the best in their fields can be found. 
The community plays host to all NFT enthusiasts, Crypto-currency, investments, among others. Here, access to exclusive information, networking events, masterminds in the world's largest cities, and renowned guests are just part of the package.
        </GradientCard>
      </ContentWrapper>
    </ProjectContainer>
  )
}
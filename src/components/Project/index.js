import React from 'react'
import { GradientCard } from '../Shared'
import { useTheme } from 'styled-components'
import {
  ProjectContainer,
  Content,
  Title,
  TitleWrapper,
  ContentWrapper,
  DescriptionWrapper
} from './styles'

export const Project = () => {
  const theme = useTheme()

  return (
    <ProjectContainer>
      <Content>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>THE PROJECT</h1>
          </Title>
        </TitleWrapper>
        <ContentWrapper>
          <DescriptionWrapper bgimage={theme.images.projectBg}>

          </DescriptionWrapper>
        </ContentWrapper>
      </Content>
    </ProjectContainer>
  )
}
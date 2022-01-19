import React from 'react'
import { GradientCard } from '../Shared'
import {
  ProjectContainer,
  Content,
  Title,
  TitleWrapper
} from './styles'

export const Project = () => {
  return (
    <ProjectContainer>
      <Content>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>THE PROJECT</h1>
          </Title>
        </TitleWrapper>
      </Content>
    </ProjectContainer>
  )
}
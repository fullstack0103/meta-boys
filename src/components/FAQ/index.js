import React from 'react'
import { useTheme } from 'styled-components'
import { GradientCard } from '../Shared'

import {
  FAQContainer,
  InnerContainer,
  TitleWrapper,
  Title
} from './styles'

export const FAQ = (props) => {
  const theme = useTheme()

  return (
    <FAQContainer>
      <InnerContainer bgimage={theme.images.faqBg}>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>FAQ</h1>
          </Title>
        </TitleWrapper>

        <GradientCard>
          
        </GradientCard>
      </InnerContainer>
    </FAQContainer>
  )
}

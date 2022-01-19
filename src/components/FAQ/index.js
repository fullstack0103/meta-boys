import React from 'react'
import { useTheme } from 'styled-components'
import { GradientCard } from '../Shared'
import { QuestionAccordion } from './QuestionAccordion'

import {
  FAQContainer,
  InnerContainer,
  TitleWrapper,
  Title,
  QuestionContainer
} from './styles'

export const FAQ = (props) => {
  const theme = useTheme()

  const questions = [
    {
      id: 1,
      title: 'What are MetaBoys?',
      description: 'MetaBoys represents an NFT collection of 10101 boys categorized in different levels of rarity.'
    },
    {
      id: 2,
      title: 'What is an NFT?',
      description: 'NFT stands for non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.'
    },
    {
      id: 3,
      title: 'What blockchain will be used?',
      description: 'MetaBoys will use Ethereum blockchain.'
    },
    {
      id: 4,
      title: 'What does “Mint” mean?',
      description: 'NFT Minting is the process by which your digital art or digital content becomes a part of the blockchain.'
    },
    {
      id: 5,
      title: 'When will be the minting day?',
      description: 'TBD'
    },
    {
      id: 6,
      title: 'When will be the reveal day?',
      description: 'TBD'
    }
  ]

  return (
    <FAQContainer id='faq'>
      <InnerContainer bgimage={theme.images.faqBg}>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>FAQ</h1>
          </Title>
        </TitleWrapper>

        {questions.map(question => (
          <QuestionContainer key={question.id}>
            <GradientCard>
              <QuestionAccordion
                question={question}
              />
            </GradientCard>
          </QuestionContainer>
        ))}
      </InnerContainer>
    </FAQContainer>
  )
}

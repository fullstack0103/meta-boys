import React from 'react'
import styled from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AccordionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.6s ease;

  .rotate {
    transform: rotate(45deg);
  }

  .accordion__icon {
    font-size: 20px;
    cursor: pointer;
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  > p {
    margin: 0;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    > p {
      font-size: 24px;
    }
    .accordion__icon {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    > p {
      font-size: 35px;
    }
  }
`

export const Accordion = (props) => {
  const style = {}
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
`
export const AccordionText = styled.div`
  font-size: 12px;
  line-height: 24px;
  border-top: 1px solid ${props => props.theme.colors.white};
  margin-top: 25px;
  padding: 16px 0 10px 0;

  @media (min-width: 768px) {
    width: calc(100% - 70px);
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    width: calc(100% - 140px);
  }
  
  @media (min-width: 1440px) {
    width: calc(100% - 200px);
    font-size: 20px;
    margin-top: 35px;
    padding: 22px 0 10px 0;
  }
`

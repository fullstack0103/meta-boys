import React, { useState, useRef } from 'react'
import AiOutlinePlus from '@meronex/icons/ai/AiOutlinePlus'

import {
  AccordionSection,
  Accordion,
  AccordionContent,
  AccordionText
} from './styles'

export const QuestionAccordion = (props) => {
  const {
    question
  } = props
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }


  return (
    <AccordionSection>
      <Accordion
        className={`accordion ${setActive}`}
      >
        <p>{question.title}</p>
        <AiOutlinePlus
          className={`${setRotate}`}
          onClick={(e) => toggleAccordion()}
        />
      </Accordion>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <AccordionText>
          {question.description}
        </AccordionText>
      </AccordionContent>
    </AccordionSection>
  )
}
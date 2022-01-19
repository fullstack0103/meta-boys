import React, { useState, useRef } from 'react'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'

import {
  AccordionSection,
  Accordion,
  AccordionContent
} from './styles'

export const QuestionAccordion = (props) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)
  const productSelect = useRef(null)
  const productActionsEdit = useRef(null)
  const productActionsDelete = useRef(null)

  const toggleAccordion = (e) => {
    const isActionsClick = productSelect.current?.contains(e.target) || productActionsEdit.current?.contains(e.target) || productActionsDelete.current?.contains(e.target)
    if (isActionsClick) return
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
        onClick={(e) => toggleAccordion(e)}
      >
        <IosArrowDown className={`${setRotate}`} />
      </Accordion>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        
      </AccordionContent>
    </AccordionSection>
  )
}
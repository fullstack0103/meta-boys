import React, { useEffect } from 'react'
import LineTo from 'react-lineto';
import { useWindowSize } from '../../../hooks/useWindowSize'

export const LineElements = () => {
  const { width } = useWindowSize()

  useEffect(() => {
    console.log('ddd')
  }, [width])

  return (
    <>
      <LineTo from="d1" to="d2" borderColor='white' delay />
      <LineTo from="d2-1" to="d3" borderColor='white' delay />
      <LineTo from="d3-1" to="d4" borderColor='white' delay />
      <LineTo from="d4-1" to="d5" borderColor='white' delay />
      <LineTo from="d5-1" to="d6" borderColor='white' delay />
    </>
  )
}

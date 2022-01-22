import styled, { css, keyframes } from 'styled-components'

const fillEffect = (percent) => keyframes`
  100% {
    stroke-dashoffset: ${percent};
  }
`

export const CircleProgressBarContainer = styled.div`
  .skill {
    width: 80px;
    height: 80px;
    background: #141414;
    position: relative;
    border-radius: 50%;
  }

  .outer {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15);
    background: #141414;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2);
    background: #131118;
  }

  .number {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  circle {
    fill: none;
    /* stroke: url(#GradientColor); */
    stroke: ${props => props.theme.colors.primary};
    ${({ percent }) => percent === 100 && css`
      stroke: ${props => props.theme.colors.green};
    ` };
    stroke-width: 10px;
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
    animation: ${({ percent }) => fillEffect(220 - 220 * percent / 100)} ease-in 2s forwards;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`
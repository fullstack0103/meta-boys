import styled, { css } from 'styled-components'

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

  #number {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  circle {
    fill: none;
    stroke: url(#GradientColor);
    ${({ percent }) => percent === 100 && css`
      stroke: ${props => props.theme.colors.green};
    ` };
    stroke-width: 10px;
    stroke-dasharray: 190;
    stroke-dashoffset: 190;
    animation: fill ease-in 2s infinite;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes fill {
    100% {
      stroke-dashoffset: ${({ percent }) => 190 - 190 * percent / 100 };
    }
  }
`
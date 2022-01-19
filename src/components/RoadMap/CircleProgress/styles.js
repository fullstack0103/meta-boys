import styled from 'styled-components'

export const CircleProgressContainer = styled.div`
  .circle-wrap {
    width: 76px;
    height: 76px;
    background: #141414;
    border-radius: 50%;
    /* border: 1px solid #141414; */
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 76px;
    height: 76px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 76px, 76px, 38px);
  }

  .circle-wrap .inside-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #100F17;
    line-height: 60px;
    text-align: center;
    margin-top: 8px;
    margin-left: 8px;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 1em;
  }

  /* color animation */

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(0px, 38px, 76px, 0px);
    background-color: ${props => props.theme.colors.primary};
  }

  .mask.full,
  .circle .fill {
    animation: fill ease-in-out 3s;
    transform: rotate(135deg);
  }

  @keyframes fill{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(135deg);
    }
  }
`
import styled from 'styled-components'

export const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 60px;
  overflow-x: hidden;
  display: flex;
  align-items: center;

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 32s linear infinite;

    .content {
      span {
        font-size: 24px;
        margin: 0 10px;
      }
    }
  }

  @keyframes marquee {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  @media (min-width: 1440px) {
    height: 80px;

    .track {
      .content {
        span {
          font-size: 32px;
          margin: 0 15px;
        }
      }
    }
  }
`

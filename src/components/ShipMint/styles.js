import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;

  > img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  > div {
    position: absolute;
  }

  @media (min-width: 768px) {
    height: initial;
    > img {
      height: initial;
    }
  }
`

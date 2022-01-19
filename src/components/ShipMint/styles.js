import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    opacity: 0.5;
  }

  > div {
    position: absolute;
  }
`

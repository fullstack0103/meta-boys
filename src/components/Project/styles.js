import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  padding-top: 90px;

  @media (min-width: 993px) {
    width: 80%;
    padding-top: 90px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.div`
  position: relative;
  
  > div {
    position: absolute;
    width: 180px;
    height: 53px;
    left: -50px;
    top: -20px
  }
  > h1 {
    font-size: 63px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    > h1 {
      font-size: 85px;
    }
    > div {
      width: 270px;
      height: 70px;
      left: -80px;
      top: -20px
    }
  }
`
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 15px 0px 15px;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 993px) {
    width: 80%;
  }
`

export const SocailWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    min-width: 20px;
    margin-right: 20px;
  }
`

export const LogoWrapper = styled.div`
  img {

  }
`

export const MenuList = styled.div``
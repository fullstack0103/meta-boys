import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.black};
  padding: 60px 15px;
`
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
  }
`
export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    margin: 10px 15px;

    svg {
      width: 25px;
    }
  }

  @media (min-width: 992px) {
    width: 40%;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    > a {
      margin: 10px 20px;
      svg {
        width: 30px;
      }
    }
  }
`
export const SocialLink = styled.a`
  cursor: pointer;

  svg {
    &:hover {
      path {
        fill: ${props => props.theme.colors.primary};
      }
    }
  }
`
export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 30px 0;

  img {
    width: 200px;
  }

  @media (min-width: 992px) {
    margin: 0;
  }

  @media (min-width: 1440px) {
    img {
      width: 250px;
    }
  }
`
export const MenuLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin: 10px 15px;
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
    width: 40%;
  }
`
export const MenuLink = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 18px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`
export const Divider = styled.div`
  height: 1px;
  background: #E5E5E5;
  margin: 50px auto;
  width: 90%;

  @media (min-width: 992px) {
    max-width: 1100px;
  }
`
export const CopyWritter = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
`

import styled from "styled-components"
import { animated } from "react-spring"

const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem 3rem;
  margin: auto;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  background-color: transparent;
  z-index: ${({ islightboxopen }) => (islightboxopen ? 0 : 100)};
`

const Logo = styled.div`
  justify-self: start;

  img {
    width: 12rem;
  }
`

const Navigation = styled.div`
  justify-self: center;

  ul {
    display: flex;
    margin: auto;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;

    &:hover li {
      opacity: 0.5;
    }

    & li:hover {
      opacity: 1;
    }

    li {
      margin: 0 30px;
      transition: all 0.2s;
    }
  }
`

const Socials = styled.div`
  justify-self: end;

  ul {
    display: flex;
    justify-content: flex-end;

    &:hover li {
      opacity: 0.5;
    }

    & li:hover {
      opacity: 1;
    }

    li {
      transition: all 0.2s;
    }

    img {
      height: 18px;
      margin: 0.5rem;
    }
  }
`

export { StyledNav, Logo, Navigation, Socials }

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
  z-index: 100;
`

const Logo = styled.div`
  justify-self: start;

  img {
    width: 14rem;

    @media (max-width: 860px) {
      width: 14rem;
    }
  }
`

const Navigation = styled.div`
  justify-self: center;

  ul {
    display: flex;
    margin: auto;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;

    li {
      margin: 0 30px;
    }
  }
`

const Socials = styled.div`
  justify-self: end;

  ul {
    display: flex;
    justify-content: flex-end;

    img {
      height: 18px;
      margin: 0.5rem;
    }
  }
`

export { StyledNav, Logo, Navigation, Socials }

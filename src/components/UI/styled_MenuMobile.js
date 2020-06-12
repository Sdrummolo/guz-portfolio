import styled from "styled-components"
import { animated } from "react-spring"

const MenuContainer = styled(animated.div)`
  display: flex;
  position: absolute;
  margin-top: ${({ scrolled }) => `${scrolled}px`};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 99;
  background-color: #fff;

  nav {
    width: 100%;
    display: flex;

    ul {
      align-self: center;
      justify-self: center;
      margin: auto;

      li {
        margin-top: 2.5rem;
        text-align: center;

        a {
          color: #000;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
`

const Socials = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  margin-left: -41px;

  ul {
    display: flex;
    justify-content: center;

    img {
      height: 25px;
      margin: 0.5rem;
    }
  }
`

export { MenuContainer, Socials }

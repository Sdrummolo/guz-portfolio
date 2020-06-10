import styled from "styled-components"
import { animated } from "react-spring"

const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 0;
  background-color: transparent;
  height: 5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: ${props => props.zindex};

  /* Logo */
  a {
    align-self: center;
  }
`

const BurgerWrapper = styled.div`
  align-self: center;
`

const MobileLogo = styled.img`
  max-width: 8rem;
`

export { StyledNav, BurgerWrapper, MobileLogo }

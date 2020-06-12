import styled from "styled-components"
import { animated } from "react-spring"

const StyledNav = styled(animated.nav)`
  position: absolute;
  top: 0;
  background-color: transparent;
  margin-top: ${({ isopen, scrolled }) => (isopen ? `${scrolled}px` : 0)};
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: ${({ islightboxopen }) => (islightboxopen ? 0 : 100)};

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

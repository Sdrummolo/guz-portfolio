import React, { useContext } from "react"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import PortfolioContext from "../../context/PortfolioContext"
import logo from "../../images/logo_large.png"

// Components
import { HamburgerSpin } from "react-animated-burgers"
import { StyledNav, BurgerWrapper, MobileLogo } from "../UI/styled_NavbarMobile"
import MenuMobile from "./MenuMobile"

const NavbarMobile = () => {
  const { isOpen, setIsOpen } = useContext(PortfolioContext)

  const NavSpring = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <>
      <StyledNav isOpen={isOpen} style={NavSpring}>
        <Link to="/">
          <MobileLogo src={logo} alt="Mattia Guzman" />
        </Link>
        <BurgerWrapper>
          <HamburgerSpin
            isActive={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            barColor={isOpen ? "#000" : "#fff"}
            buttonWidth={29}
            style={{ outline: "none" }}
          />
        </BurgerWrapper>
      </StyledNav>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default NavbarMobile

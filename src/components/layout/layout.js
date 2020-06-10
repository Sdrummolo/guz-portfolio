import React, { useContext } from "react"
import GlobalStyle from "../../styles/global"
import PortfolioContext from "../../context/PortfolioContext"

// Components
import Wrapper from "../utilities/wrapper"
import Navbar from "./Navbar"
import NavbarMobile from "../layout/NavbarMobile"

const Layout = ({ children, path }) => {
  const { isMobile, isOpen, height } = useContext(PortfolioContext)

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <Wrapper height={height}>
        <main>{children}</main>
        {isMobile ? <NavbarMobile path={path} /> : <Navbar path={path} />}
      </Wrapper>
    </>
  )
}

export default Layout

import React, { useContext } from "react"
import GlobalStyle from "../../styles/global"
import PortfolioContext from "../../context/PortfolioContext"

// Components
import Wrapper from "../utilities/wrapper"
import Navbar from "./Navbar"
import NavbarMobile from "../layout/NavbarMobile"

const Layout = ({ children, zIndex }) => {
  const { isMobile, isOpen } = useContext(PortfolioContext)

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <Wrapper>
        <main>{children}</main>
        {isMobile ? (
          <NavbarMobile zIndex={zIndex === undefined ? 100 : 0} /> // Removes zIndex from gallery because of a conflict with the lightBox component
        ) : (
          <Navbar zIndex={zIndex === undefined ? 100 : 0} /> // Removes zIndex from gallery because of a conflict with the lightBox component
        )}
      </Wrapper>
    </>
  )
}

export default Layout

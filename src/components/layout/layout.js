import React, { useContext } from "react"
import GlobalStyle from "../../styles/global"
import PortfolioContext from "../../context/PortfolioContext"

// Components
import Wrapper from "../utilities/wrapper"
import Navbar from "./Navbar"
import NavbarMobile from "../layout/NavbarMobile"

const Layout = ({ children }) => {
  const { isMobile, isOpen } = useContext(PortfolioContext)

  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      {/* <Wrapper> */}
      <main>{children}</main>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      {/* </Wrapper> */}
    </>
  )
}

export default Layout

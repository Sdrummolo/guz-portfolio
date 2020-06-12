import React, { useContext } from "react"
import { Transition } from "react-spring/renderprops"
import GlobalStyle from "../../styles/global"
import PortfolioContext from "../../context/PortfolioContext"

// Components
import Navbar from "./Navbar"
import NavbarMobile from "../layout/NavbarMobile"

const Layout = ({ children }) => {
  const { isMobile, isOpen } = useContext(PortfolioContext)

  return (
    <>
      <GlobalStyle isopen={isOpen} />
      <Transition
        config={{ duration: 500, delay: 200 }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {() => style => (
          <>
            {isMobile ? <NavbarMobile /> : <Navbar />}
            <main style={style}>{children}</main>
          </>
        )}
      </Transition>
    </>
  )
}

export default Layout

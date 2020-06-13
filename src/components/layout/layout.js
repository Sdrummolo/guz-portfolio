import React, { useContext } from "react"
import { Transition } from "react-spring/renderprops"
import GlobalStyle from "../../styles/global"
import PortfolioContext from "../../context/PortfolioContext"

// Components
import Navbar from "./Navbar"
import NavbarMobile from "../layout/NavbarMobile"
import Wrapper from "../utilities/wrapper"

const Layout = ({ children }) => {
  const { isMobile, isOpen, height } = useContext(PortfolioContext)

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
            <Wrapper height={height}>
              {isMobile ? <NavbarMobile /> : <Navbar />}
              <main style={style}>{children}</main>
            </Wrapper>
          </>
        )}
      </Transition>
    </>
  )
}

export default Layout

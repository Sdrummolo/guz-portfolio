import React, { useContext } from "react"
import { Transition } from "react-spring/renderprops"
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
      <GlobalStyle ispen={isOpen} />
      <Transition // Page transition
        config={{ duration: 500, delay: 200 }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {() => style => (
          <>
            <Wrapper height={height}>
              {isMobile ? <NavbarMobile path={path} /> : <Navbar path={path} />}
              <main style={style}>{children}</main>
            </Wrapper>
          </>
        )}
      </Transition>
    </>
  )
}

export default Layout

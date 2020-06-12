import React, { useState, useEffect } from "react"
import PortfolioContext from "./PortfolioContext"

const PortfolioState = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(null)
  const [scrolled, setScrolled] = useState(null)

  const handleResize = () => {
    getDeviceWidth()
    getDeviceHeight()
  }

  const handleScroll = () => {
    setScrolled(window.scrollY)
  }

  const getDeviceHeight = () => setHeight(window.innerHeight)

  // Listen for resize
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleResize])

  // load appropriate navbar on render
  useEffect(() => {
    handleResize()
  }, [handleResize])

  const getDeviceWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        isMobile: isMobile,
        isOpen: isOpen,
        height: height,
        scrolled: scrolled,
        setIsOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioState

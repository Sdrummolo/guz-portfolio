import React, { useState, useEffect } from "react"
import PortfolioContext from "./PortfolioContext"

const PortfolioState = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(null)

  // Listen for resize and scroll
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = () => {
    getDeviceWidth()
    getDeviceHeight()
  }

  // load appropriate navbar on render
  useEffect(() => {
    handleResize()
  }, [])

  const getDeviceWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const getDeviceHeight = () => setHeight(window.innerHeight)

  return (
    <PortfolioContext.Provider
      value={{ isMobile: isMobile, isOpen: isOpen, height: height, setIsOpen }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioState

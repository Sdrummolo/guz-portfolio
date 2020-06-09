import React, { useState, useEffect } from "react"
import PortfolioContext from "./PortfolioContext"

const PortfolioState = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // Listen for resize and scroll
  useEffect(() => {
    window.addEventListener("resize", getDeviceWidth)
    return () => {
      window.removeEventListener("resize", getDeviceWidth)
    }
  }, [])

  // load appropriate navbar on render
  useEffect(() => {
    getDeviceWidth()
  }, [])

  const getDeviceWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  return (
    <PortfolioContext.Provider
      value={{ isMobile: isMobile, isOpen: isOpen, setIsOpen }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioState

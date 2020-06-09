import React from "react"
import PortfolioState from "./src/context/PortfolioState"

export const wrapRootElement = ({ element }) => {
  return <PortfolioState>{element}</PortfolioState>
}

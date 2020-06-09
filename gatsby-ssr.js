import React from "react"
import PortfolioState from "./src/context/PortfolioState"

export function wrapRootElement({ element }) {
  return <PortfolioState>{element}</PortfolioState>
}

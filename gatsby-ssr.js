const React = require("react")
const PortfolioState = require("./src/context/PortfolioState")

exports.wrapRootElement = ({ element }) => {
  return <PortfolioState>{element}</PortfolioState>
}

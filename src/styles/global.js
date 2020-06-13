import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #202020;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    height: -webkit-fill-available;
    background-color: var(--bg-color);
  }

  body {
    font-size: 16px;
    font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #fff;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-color);
    min-height: -webkit-fill-available;
    overflow-y: ${({ isopen }) => (isopen ? "hidden" : "visible")};
    overflow-x: hidden;
  }

  a {
      text-decoration: none;
      color: #fff;
    }

  ul {
    list-style: none;
  }

  textarea, input, button, select { font-family: 
    inherit; font-size: inherit; 
  }
`

export default GlobalStyle

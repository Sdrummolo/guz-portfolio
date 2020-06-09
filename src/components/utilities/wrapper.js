import styled from "styled-components"

// Disallows overflow-x
// Position relative is required in order to work
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`
export default Wrapper

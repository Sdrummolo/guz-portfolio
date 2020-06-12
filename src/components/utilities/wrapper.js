import styled from "styled-components"

// Disallows overflow-x
// Position relative is required in order to work
const Wrapper = styled.div`
  position: relative;
  min-height: ${props => `${props.height}px`};
  overflow-y: hidden;
`
export default Wrapper

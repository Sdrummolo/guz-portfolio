import styled from "styled-components"
import { animated } from "react-spring"

const ExploreButton = styled(animated.button)`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -73.235px;
  margin-top: -26px;
  z-index: 20;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 800;
  background-color: transparent;
  border: 3px solid #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.2s, color 0.2s;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: -58.18px;
    margin-top: -22.295px;
    padding: 0.8rem 1.6rem;
    border: 2px solid #fff;
  }
`

export default ExploreButton

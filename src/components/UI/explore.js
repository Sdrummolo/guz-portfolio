import styled from "styled-components"

const ExploreButton = styled.button`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -73.235px;
  margin-top: -26px;
  z-index: 20;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: 3px solid #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.2s;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-left: -61.765px;
    margin-top: -25px;
    padding: 0.8rem 1.9rem;
  }
`

export default ExploreButton

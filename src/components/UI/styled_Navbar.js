import styled from "styled-components"

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem 3rem;
  margin: auto;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  background-color: transparent;
  z-index: ${props => props.zIndex};
`

const Logo = styled.div`
  justify-self: start;

  img {
    width: 18rem;

    @media (max-width: 980px) {
      width: 16rem;
    }

    @media (max-width: 860px) {
      width: 14rem;
    }
  }
`
const Navigation = styled.div`
  justify-self: center;

  ul {
    display: flex;
    margin: auto;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;

    li {
      margin: 0 30px;
    }
  }
`

const Socials = styled.div`
  justify-self: end;

  ul {
    display: flex;
    justify-content: flex-end;

    img {
      height: 15px;
      margin: 0.5rem;
    }
  }
`

export { StyledNav, Logo, Navigation, Socials }

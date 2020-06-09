import React from "react"
import { useSpring } from "react-spring"
import { Link } from "gatsby"
import logo from "../../images/logo_large.png"
import instagram from "../../images/instagram_white.png"
import linkedin from "../../images/linkedin_white.png"

// Components
import { StyledNav, Logo, Navigation, Socials } from "../UI/styled_Navbar"

const Navbar = () => {
  const NavSpring = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <StyledNav style={NavSpring}>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Mattia Guzman" />
        </Link>
      </Logo>

      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Navigation>

      <Socials>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/mattiaguzman/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mattia-guzman-86424916b/?originalSubdomain=it"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
          </li>
        </ul>
      </Socials>
    </StyledNav>
  )
}

export default Navbar

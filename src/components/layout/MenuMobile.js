import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import instagram from "../../images/instagram_dark.png"
import linkedin from "../../images/linkedin_dark.png"

// Components
import { MenuContainer, Socials } from "../UI/styled_MenuMobile"

const MenuMobile = ({ isOpen, setIsOpen }) => {
  const MenuSpring = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(100vw)",
  })

  return (
    <MenuContainer style={MenuSpring}>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

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
      </nav>
    </MenuContainer>
  )
}

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default MenuMobile

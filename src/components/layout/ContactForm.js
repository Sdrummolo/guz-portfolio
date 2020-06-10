import React from "react"

// Components
import { StyledForm } from "../UI/styled_ContactForm"

const ContactForm = () => {
  return (
    <StyledForm>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" />
      <button>Submit</button>
    </StyledForm>
  )
}

export default ContactForm

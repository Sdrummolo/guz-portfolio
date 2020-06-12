import React from "react"

// Components
import { StyledForm } from "../UI/styled_ContactForm"

const ContactForm = () => {
  return (
    <StyledForm method="POST" data-netlify="true">
      <input type="hidden" name="contact-form" value="Contact Form" />
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea placeholder="Message" name="message" />
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default ContactForm

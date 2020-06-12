import React, { useState } from "react"

// Components
import { StyledForm } from "../UI/styled_ContactForm"

const ContactForm = () => {
  return (
    <StyledForm name="contact" method="POST" data-netlify="true">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea placeholder="Message" name="message" />
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default ContactForm

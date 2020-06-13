import React, { useState } from "react"

// Components
import { StyledForm } from "../UI/styled_ContactForm"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = e => e.preventDefault()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <StyledForm name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Message"
        name="message"
        value={formData.message}
        required
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default ContactForm

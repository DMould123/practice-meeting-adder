import React, { useState } from 'react'

function EmailSender({ id }) {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Send the email with the ID here
    // This would typically involve making an HTTP request to a back-end service or using an external library to send the email
    console.log(`Sending email to ${email} with ID: ${id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Send Email</button>
    </form>
  )
}

export default EmailSender

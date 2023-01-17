import React, { useState } from 'react'

function MeetingCodeGenerator() {
  const [meetingCode, setMeetingCode] = useState('')

  function generateCode() {
    // generate a random code using the Math.random function
    const code = Math.random().toString(36).substring(2, 8)
    setMeetingCode(code)
  }

  return (
    <div>
      <button onClick={generateCode}>Generate Meeting Code</button>
      <p>Meeting Code: {meetingCode}</p>
    </div>
  )
}

export default MeetingCodeGenerator

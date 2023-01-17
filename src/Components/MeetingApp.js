import React, { useState } from 'react'

function MeetingApp() {
  const [participants, setParticipants] = useState([])

  function addParticipant(name) {
    // generate a random ID using the Math.random function
    const id = Math.random().toString(36).substring(2, 8)
    setParticipants([...participants, { name, id }])
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addParticipant(e.target.elements.name.value)
          e.target.elements.name.value = ''
        }}
      >
        <input type="text" name="name" placeholder="Participant name" />
        <button type="submit">Add Participant</button>
      </form>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            {participant.name} - ID: {participant.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MeetingApp

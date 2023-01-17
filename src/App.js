import React, { useState } from 'react'

function App() {
  const [meetingCode, setMeetingCode] = useState('')
  const [meetingName, setMeetingName] = useState('')
  const [participants, setParticipants] = useState([])
  const [attendance, setAttendance] = useState({})
  const [scores, setScores] = useState({
    Architecture: 0,
    Design: 0,
    UX: 0,
    Facilitator: 0,
    BusinessModel: 0
  })

  function generateCode() {
    // generate a random code using the Math.random function
    const code = Math.random().toString(36).substring(2, 8)
    setMeetingCode(code)
  }

  function addParticipant(name) {
    // generate a random ID using the Math.random function
    const id = Math.random().toString(36).substring(2, 8)
    setParticipants([
      ...participants,
      { name, id, role: '', score: { ...scores } }
    ])
    // mark the participant as present
    setAttendance({ ...attendance, [id]: true })
  }

  function toggleAttendance(id) {
    setAttendance({ ...attendance, [id]: !attendance[id] })
  }

  function handleScoreChange(role, value, id) {
    const newParticipants = [...participants]
    const index = newParticipants.findIndex(
      (participant) => participant.id === id
    )
    newParticipants[index].score[role] = value
    setParticipants(newParticipants)
  }

  function deleteParticipant(id) {
    setParticipants(participants.filter((participant) => participant.id !== id))
    setAttendance({ ...attendance, [id]: undefined })
  }

  function refresh() {
    setMeetingCode('')
    setMeetingName('')
    setParticipants([])
    setAttendance({})
    setScores({
      Architecture: 0,
      Design: 0,
      UX: 0,
      Facilitator: 0,
      BusinessModel: 0
    })
  }

  return (
    <div>
      <label>Meeting Name:</label>
      <input
        type="text"
        value={meetingName}
        onChange={(e) => setMeetingName(e.target.value)}
      />
      <br />
      <button onClick={generateCode}>Generate Meeting Code</button>
      <p>Meeting Code: {meetingCode}</p>
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
      <button onClick={refresh}>Start New Meeting</button>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            {participant.name} - ID: {participant.id} - Attendance:{' '}
            {attendance[participant.id] ? 'Present' : 'Absent'}
            <button onClick={() => toggleAttendance(participant.id)}>
              {attendance[participant.id]
                ? 'Mark as Absent'
                : 'Mark as Present'}
            </button>
            <br />
            {attendance[participant.id] && (
              <div>
                {Object.keys(scores).map((score) => (
                  <div key={score}>
                    <label>{score}:</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={participant.score[score]}
                      onChange={(e) =>
                        handleScoreChange(score, e.target.value, participant.id)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
            <button onClick={() => deleteParticipant(participant.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

// Author: Irene Winnie
import { useState } from "react"

function AddMemberForm() {
  const [newMemberName, setNewMemberName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedName(newMemberName)
    setNewMemberName("")
  }

  return (
    <div>
      <h3>Add a New Member</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMemberName}
          onChange={handleChange}
          placeholder="Enter member name"
        />
        <button type="submit">Add</button>
      </form>
      {submittedName && <p>Last submitted: {submittedName}</p>}
    </div>
  )
}

export default AddMemberForm
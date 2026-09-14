// Author: Irene Winnie
// Contributor: Ibrahim Salami — task 50 final integration review.
import { useState } from "react"
import type { ChangeEvent, FormEvent, ReactElement } from "react"
import type { Member } from "./types/member"

interface AddMemberFormProps {
  onAddMember: (member: Member) => void
}

function AddMemberForm({ onAddMember }: AddMemberFormProps): ReactElement {
  const [newMemberName, setNewMemberName] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (newMemberName.trim() === "") return
    const newMember: Member = {
      id: Date.now().toString(),
      name: newMemberName.trim(),
      role: "New Member",
      tasksCompleted: 0,
      isActive: true,
    }
    onAddMember(newMember)
    setNewMemberName("")
  }

  return (
    <div className="add-member-panel">
      <h3>Add a New Member</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="new-member-name"
          type="text"
          value={newMemberName}
          onChange={handleChange}
          placeholder="Enter member name"
          aria-label="New member name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddMemberForm

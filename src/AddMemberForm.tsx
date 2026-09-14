// Author: Irene Winnie
// Contributor: Ibrahim Salami — task 50 final integration review.
import { useState } from "react"
import type { ChangeEvent, FormEvent, ReactElement } from "react"
import type { Member } from "./types/member"

interface AddMemberFormProps {
  onAddMember: (member: Member) => void
}

function createMemberId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }
  return `member-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function AddMemberForm({ onAddMember }: AddMemberFormProps): ReactElement {
  const [newMemberName, setNewMemberName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (newMemberName.trim() === "") return
    const newMember: Member = {
      id: createMemberId(),
      name: newMemberName.trim(),
      role: "New Member",
      tasksCompleted: 0,
      isActive: true,
    }
    onAddMember(newMember)
    setSubmittedName(newMember.name)
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
      {submittedName && (
        <p aria-live="polite">Added member: {submittedName}</p>
      )}
    </div>
  )
}

export default AddMemberForm

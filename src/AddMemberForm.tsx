// Author: Irene Winnie
import { useState } from "react"
import type { Member } from "./types/member"

interface AddMemberFormProps {
  onAddMember: (member: Member) => void
}

function AddMemberForm({ onAddMember }: AddMemberFormProps) {
  const [newMemberName, setNewMemberName] = useState("")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    </div>
  )
}

export default AddMemberForm
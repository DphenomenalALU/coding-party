// Author: Irene Winnie
// Contributor: Ibrahim Salami — omit the unused setter so the shared TypeScript build passes.
import { useState } from "react"

function AddMemberForm() {
  const [newMemberName] = useState("")

  return (
    <div>
      <h3>Add a New Member</h3>
      <p>Name entered: {newMemberName}</p>
    </div>
  )
}

export default AddMemberForm
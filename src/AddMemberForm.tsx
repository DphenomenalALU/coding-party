// Author: Irene Winnie
import { useState } from "react"

function AddMemberForm() {
  const [newMemberName, setNewMemberName] = useState("")

  return (
    <div>
      <h3>Add a New Member</h3>
      <p>Name entered: {newMemberName}</p>
    </div>
  )
}

export default AddMemberForm
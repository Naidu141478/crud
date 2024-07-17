import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      {/* <label>Name</label> */}
      <p>  <input type="text" name="name" placeholder="Name" 
      value={user.name} onChange={handleInputChange} /></p>
      {/* <label>Username</label> */}
      <p>  <input type="text" name="username" placeholder="Username" 
      value={user.username} onChange={handleInputChange} /></p>
<p><button class="btn btn-primary">Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info button muted-button m-2">
        Cancel
      </button></p>
    </form>
  )
}

export default EditUserForm
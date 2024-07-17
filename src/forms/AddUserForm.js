import React, { useState } from 'react';
import './AddUserForm.css';

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
    <p>
      {/* <label>Name</label> */}
      <input type="text" name="name" placeholder="Name" 
      value={user.name} onChange={handleInputChange} />
      </p>
      <p>
      {/* <label>Username</label> */}
      <input type="text" name="username" placeholder="Username" 
      value={user.username} onChange={handleInputChange} />
      </p>
      <p>
      <button  class="btn btn-primary">Add new user</button>
      </p>
    </form>
  )
}

export default AddUserForm
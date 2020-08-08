import React, { useState } from 'react'




const AddMemberForm = (props) => {


const [member, setMember] = useState({name: '', role: '', email: ''})
  //console.log('TEAM: ', team)

  const handleChanges = e => {

    const newTeamMember = {...member, [e.target.name]: e.target.value}
    console.log('New Team Member: ', newTeamMember)

    setMember(newTeamMember)

  }

  const submitForm = e => {

    e.preventDefault()
    props.addNewMember(member)
    setMember({name: '', role: '', email: ''})
  }

  
  return (

    <div className="App">
      <h1>Team List</h1>

    <form onSubmit={submitForm}>

      <label htmlFor='Add Team Member'></label>
        <input
          id='Add Team Member'
          type='text'
          placeholder='Name'
          name='name'
          value={member.name}
          onChange={handleChanges}
        />

        <label htmlFor='Add role'></label>
          <input
            id='Add Role'
            type='text'
            placeholder='Role'
            name='role'
            value={member.role}
            onChange={handleChanges}
          />

        <label htmlFor='Add Email'></label>
        <input
          id='Add Email'
          type='email'
          placeholder='Email'
          name='email'
          value={member.email}
          onChange={handleChanges}
        />

        <button type='submit'>Add Team Member</button>
    </form>
    </div>


  );
}

export default AddMemberForm
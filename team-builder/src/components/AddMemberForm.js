import React, { useState } from 'react'




const AddMemberForm = (props) => {


const [team, setTeam] = useState([{name: '', email: '', role: ''}])
  //console.log('TEAM: ', team)

  const handleChanges = e => {

    const newTeamMember = {...team, [e.target.name]: e.target.value}
    console.log('New Team Member: ', newTeamMember)

    setTeam(newTeamMember)

  }

  const submitForm = e => {

    e.preventDefault()


  }

  return (

    <div className="App">
      <h1>Team List</h1>

    <form>

      <label htmlFor='Add Team Member'></label>
        <input
          id='Add Team Member'
          type='text'
          placeholder='Name'
          name='name'
          // onChange={handleChanges}
        />

        <label htmlFor='Add role'></label>
          <input
            id='Add Role'
            type='text'
            placeholder='Role'
            name='role'
            //onChange={handleChanges}
          />

        <label htmlFor='Add Email'></label>
        <input
          id='Add Email'
          type='email'
          placeholder='Email'
          name='email'
          //onChange={handleChanges}
        />

        <button type='submit'>Add Team Member</button>

          

    </form>


        {/* <ul>
        {teamMembers.map(member => <li>{member.name}</li>)}
      </ul> */}
    </div>


  );
}

export default AddMemberForm
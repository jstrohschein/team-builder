import React, { useState } from 'react';
import './App.css';
import AddMemberForm from './components/AddMemberForm';
import Members from './components/Members'




const App = () => {


  const [members, setMembers] = useState([

    {
      name: 'Jared Strohschein',
      role: 'Software Engineer',
      email: 'email@email.com'
    }

  ])

  const addNewMember = member => {

    const newMember = {
      name: member.name,
      role: member.role,
      email: member.email
    }

    setMembers([...members, newMember])

  }



  return (

    <div>
      <AddMemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
    
  )
}

export default App;

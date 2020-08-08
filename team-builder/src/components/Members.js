import React from 'react'
import '../App.css';





const Members = props => {


  console.log(props)

  
  return (

  <ul>
    {props.members.map(member => (
      <li key={member.name}>
        <h2>{member.name}</h2>
        <h5>{member.role}</h5>
        <h5>{member.email}</h5>
      </li>
    ))}
  </ul>

  )
}



export default Members
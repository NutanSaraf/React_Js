import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './AddUserForm'


const App = () =>{

  const userData = [
    {id:101,name:'Raj',username:'raj121'},
    {id:102,name:'Rajesh',username:'rajesh121'},
    {id:103,name:'suraj',username:'sj121'}
  ]

  const[users,setUsers] = useState(userData)

  const adduser = (user) =>{
    user.id = user.length+100
    setUsers([...users,user])
  }

  return(
    <div className="container">
      <h1>CRUD app Myapp.</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm adduser={adduser} />
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users = {users}/>
        </div>
      </div>
    </div>
  );
}

export default App
import React, { useState } from 'react'

const AddUserForm = (props) => {
    return(
        <form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>User Name</label>
            <input type="text" name="username" value="" />
            <button>Add new User</button>
        </form>
    );
}

export default AddUserForm

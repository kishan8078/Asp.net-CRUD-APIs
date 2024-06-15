import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/CreateFormCSS.css'

const CreateForm = () => {

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [department , setDepartment] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value)
    }


    const CreateStaff = () => {
        const Staff = {
          "name": name,
          "email": email,
          "department": department
        }

        axios.post(`https://localhost:7217/api/Staff` , Staff)
        .then((res) => {
            console.log("Created");
            // alert('Staff Created Successfully');
            toast.success("Staff created successfully !!")
        })
        .catch((err) => {
            alert('Error Creating the staff');
            console.error("ERROR iss", err);
        })
    }

  return (

    <div className="form-container">
      <h1>Create a Staff</h1>
      <div className="input-form">
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={handleChangeName}
          className="form-input"
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={handleChangeEmail}
          className="form-input"
        />
        <input
          type="text"
          placeholder='Department'
          value={department}
          onChange={handleChangeDepartment}
          className="form-input"
        />
        <button onClick={CreateStaff} className="submit-button">Submit</button>
      </div>
    </div>
  )
}

export default CreateForm

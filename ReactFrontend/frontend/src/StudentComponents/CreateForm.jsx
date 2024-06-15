import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/CreateFormCSS.css'
import toast from 'react-hot-toast';

const CreateForm = () => {

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [enrollmentYear , setEnrollmentYear] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeEnrollmentYear = (event) => {
        setEnrollmentYear(event.target.value)
    }


    const CreateStudent = () => {
        const Student = {
            "name": name,
            "email": email,
            "enrollmentYear": enrollmentYear
          }

        axios.post(`https://localhost:7217/api/Student` , Student)
        .then((res) => {
            console.log("Created");
            toast.success("Student created successfully !!")
            // alert('Student Created Successfully');
        })
        .catch((err) => {
            alert('Error Creating the student');
            console.error("ERROR iss", err);
        })
    }

  return (

    <div className="form-container">
      <h1>Create a Student</h1>
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
          type="number"
          placeholder='Enrollment Year'
          value={enrollmentYear}
          onChange={handleChangeEnrollmentYear}
          className="form-input"
        />
        <button onClick={CreateStudent} className="submit-button">Submit</button>
      </div>
    </div>
  )
}

export default CreateForm

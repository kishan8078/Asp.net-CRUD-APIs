import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/CreateFormCSS.css'

const CreateForm = () => {

    const [name , setName] = useState();
    const [description , setDescription] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
      setDescription(event.target.value)
    }


    const CreateSubject = () => {
        const Subject = {
          "name": name,
          "description": description
        }

        axios.post(`https://localhost:7217/api/Subject` , Subject)
        .then((res) => {
            console.log("Created");
            // alert('Subject Created Successfully');
            toast.success("Subject created successfully !!")
        })
        .catch((err) => {
            alert('Error Creating the subject');
            console.error("ERROR iss", err);
        })
    }

  return (

    <div className="form-container">
      <h1>Create a Subject</h1>
      <div className="input-form">
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={handleChangeName}
          className="form-input"
        />

        <input
          type="text"
          placeholder='Description'
          value={description}
          onChange={handleChangeDescription}
          className="form-input"
        />
        <button onClick={CreateSubject} className="submit-button">Submit</button>
      </div>
    </div>
  )
}

export default CreateForm

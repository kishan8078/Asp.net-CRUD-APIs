import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/GetByIdCSS.css'

const GetById = () => {

    const [name , setName] = useState();
    const [desc , setDescription] = useState();
    const [subjectId , setSubjectId] = useState();

    const [found , setFound] = useState(false);
    const [Id , setId] = useState();
    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    const SearchSubject = () => {
        axios.get(`https://localhost:7217/api/Subject/${Id}`)
        .then((res) => {
            console.log("searching Id is : " , Id)
            console.log(res.data);
            console.log(res.data.subjectId);
              setSubjectId(res.data.subjectId)
            console.log(res.data.name);
              setName(res.data.name)
            console.log(res.data.description);
                setDescription(res.data.description)
            
            setFound(true)
            console.log("setting found true")
        })
        .catch(err => console.log("Error is " , err));
    }

    const deleteStaff = (subjectId) => {
        axios.delete(`https://localhost:7217/api/Subject?subjectId=${subjectId}`)
        .then((res) => {
          console.log("Subject to be deleted is :: " , subjectId)
          alert("Subject Delelted");
          window.location.reload();
        })
        .catch((err) => {
          console.log("Subject to be deleted is :: " , subjectId)
          alert("Error while deleting subject...");
          console.log("Err is : " , err)
        })
      }

  return (
    <div className="f-wrapper">
      <div className="wrapper">
      <div className="con">
        <input type="number" placeholder='Enter the Subject ID' value={Id} onChange={handleIdChange} />
        <button onClick={SearchSubject}>Search</button>
      </div>


      {found ? 
        <div className="student-card">
          <p className="student-name"><h3>subject Name:</h3> {name}</p>
          <p className="student-email">Subject Description: {desc}</p>
          
          <button onClick={() => deleteSubject(subjectId)}>Delete</button>
        </div>
      : 
        <div className="no-data"><p>No Data</p></div>
      }
    </div>
    </div>



    
  )
}

export default GetById

import React, { lazy, useEffect, useState } from 'react'
import 'axios'
import axios from 'axios'
import '../assets/postbox.png'


import '../CSS/GetAllCSS.css'

const GetAll = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7217/api/Subject`)
        .then(
            response => {
                console.log("Get All Response",response);
                setData([...data, ...response.data])
            }
        )
        .catch(err=>{
            console.error("Error in getting all subjects ", err);
        })
    } , [])


    const deleteSubject = (subjectId) => {
      axios.delete(`https://localhost:7217/api/Subject?subjectId=${subjectId}`)
      .then((res) => {
        console.log("subject to be deleted is :: " , subjectId)
        alert("subject Delelted");
        window.location.reload();
      })
      .catch((err) => {
        console.log("subject to be deleted is :: " , subjectId)
        alert("Error while deleting subject...");
        console.log("Err is : " , err)
      })
    }

  return (
    <div className="student-list">
      <h1>List of Subjects</h1>
      {data.map((item, index) => (
        <div key={index} className="student-card">
          <p className="student-name">Subject Name: {item.name}</p>
          <p className="student-email">Subject Description: {item.description}</p>
          <button className='delete-button' onClick={() => deleteSubject(item.subjectId)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default GetAll



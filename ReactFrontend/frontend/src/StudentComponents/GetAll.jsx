import React, { lazy, useEffect, useState } from 'react'
import 'axios'
import axios from 'axios'
import '../assets/postbox.png'
import {toast} from 'react-hot-toast'

import '../CSS/GetAllCSS.css'

const GetAll = () => {

    const [data , setData] = useState([]);
    const [refresh , setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`https://localhost:7217/api/Student`)
        .then(
            response => {
                console.log("Get All Response",response);
                setData([...data, ...response.data])
            }
        )
        .catch(err=>{
            console.error("Error in getting all students ", err);
        })
    } , [refresh])


    const deleteStudent = (studentId) => {
      axios.delete(`https://localhost:7217/api/Student?studentId=${studentId}`)
      .then((res) => {
        console.log("student to be deleted is :: " , studentId)
        // alert("Student Delelted");
        toast.success("Deleted successfully !!")
        setRefresh(!refresh)
        // window.location.reload();
      })
      .catch((err) => {
        console.log("student to be deleted is :: " , studentId)
        alert("Error while deleting student...");
        console.log("Err is : " , err)
      })
    }

  return (
    <div className="student-list">
      <h1>List of Students</h1>
      {data.map((item, index) => (
        <div key={index} className="student-card">
          <p className="student-name">Student Name: {item.name}</p>
          <p className="student-email">Student Email: {item.email}</p>
          <p className="student-enrollment-year">Student Enrolled Year: {item.enrollmentYear}</p>
          <button className="delete-button" onClick={() => deleteStudent(item.studentId)}>Delete</button>
        </div>
      ))}
    </div>

  )
}

export default GetAll



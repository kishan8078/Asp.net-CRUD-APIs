import React, { lazy, useEffect, useState } from 'react'
import 'axios'
import axios from 'axios'
import '../assets/postbox.png'


import '../CSS/GetAllCSS.css'

const GetAll = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:7217/api/Staff`)
        .then(
            response => {
                console.log("Get All Response",response);
                setData([...data, ...response.data])
            }
        )
        .catch(err=>{
            console.error("Error in getting all staffs ", err);
        })
    } , [])


    const deleteStaff = (staffId) => {
      axios.delete(`https://localhost:7217/api/Staff?staffId=${staffId}`)
      .then((res) => {
        console.log("staff to be deleted is :: " , staffId)
        alert("staff Delelted");
        window.location.reload();
      })
      .catch((err) => {
        console.log("staff to be deleted is :: " , staffId)
        alert("Error while deleting staff...");
        console.log("Err is : " , err)
      })
    }

  return (
    <div className="student-list">
      <h1>List of Staffs</h1>
      {data.map((item, index) => (
        <div key={index} className="student-card">
          <p className="student-name">Staff Name: {item.name}</p>
          <p className="student-email">Staff Email: {item.email}</p>
          <p className="student-enrollment-year">Staff Department: {item.department}</p>
          <button className='submit-button' onClick={() => deleteStaff(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default GetAll



import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/GetByIdCSS.css'

const GetById = () => {

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [department , setDepartment] = useState();
    const [staffId , setStaffId] = useState();

    const [found , setFound] = useState(false);
    const [Id , setId] = useState();
    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    const SearchStaff = () => {
        axios.get(`https://localhost:7217/api/Staff/${Id}`)
        .then((res) => {
            console.log("searching Id is : " , Id)
            console.log(res.data);
            console.log(res.data.studentId);
              setStaffId(res.data.studentId)
            console.log(res.data.name);
                setName(res.data.name)
            console.log(res.data.email);
                setEmail(res.data.email)
            console.log(res.data.department);
              setDepartment(res.data.department)
            setFound(true)
            console.log("setting found true")
        })
        .catch(err => console.log("Error is " , err));
    }

    const deleteStaff = (staffId) => {
        axios.delete(`https://localhost:7217/api/Staff?staffId=${staffId}`)
        .then((res) => {
          console.log("staff to be deleted is :: " , staffId)
          alert("Staff Delelted");
          window.location.reload();
        })
        .catch((err) => {
          console.log("Staff to be deleted is :: " , staffId)
          alert("Error while deleting staff...");
          console.log("Err is : " , err)
        })
      }

  return (
    <div className="f-wrapper">
      <div className="wrapper">
      <div className="con">
        <input type="number" placeholder='Enter the staff ID' value={Id} onChange={handleIdChange} />
        <button onClick={SearchStaff}>Search</button>
      </div>


      {found ? 
        <div className="student-card">
          <p className="student-name"><h3>Staff Name:</h3> {name}</p>
          <p className="student-email">Staff Email: {email}</p>
          <p className="student-enrollment-year">Staff Department: {department}</p>
          <button onClick={() => deleteStaff(staffId)}>Delete</button>
        </div>
      : 
        <div className="no-data"><p>No Data</p></div>
      }
    </div>
    </div>



    
  )
}

export default GetById

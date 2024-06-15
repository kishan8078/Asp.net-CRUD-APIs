import axios from 'axios';
import React, { useState } from 'react'
import '../CSS/GetByIdCSS.css'

const GetById = () => {

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [enrollmentYear , setEnrollmentYear] = useState();
    const [studentId , setStudentId] = useState();

    const [found , setFound] = useState(false);
    const [Id , setId] = useState();
    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    const SearchStudent = () => {
        axios.get(`https://localhost:7217/api/Student/${Id}`)
        .then((res) => {
            console.log("searching Id is : " , Id)
            console.log(res.data);
            console.log(res.data.studentId);
                setStudentId(res.data.studentId)
            console.log(res.data.name);
                setName(res.data.name)
            console.log(res.data.email);
                setEmail(res.data.email)
            console.log(res.data.enrollmentYear);
                setEnrollmentYear(res.data.enrollmentYear)
            setFound(true)
            console.log("setting found true")
        })
        .catch(err => console.log("Error is " , err));
    }

    const deleteStudent = (studentId) => {
        axios.delete(`https://localhost:7217/api/Student?studentId=${studentId}`)
        .then((res) => {
          console.log("student to be deleted is :: " , studentId)
          // alert("Student Delelted");
          toast.error("Deleted successfully !!")
          // window.location.reload();
        })
        .catch((err) => {
          console.log("student to be deleted is :: " , studentId)
          alert("Error while deleting student...");
          console.log("Err is : " , err)
        })
      }

  return (
    <div className="f-wrapper">
  <div className="wrapper">
    <div className="con">
      <input type="number" placeholder="Enter the student ID" value={Id} onChange={handleIdChange} />
      <button onClick={SearchStudent}>Search</button>
    </div>

    {found ? (
      <div className="student-card">
        <p className="student-name"><h3>Student Name:</h3> {name}</p>
        <p className="student-email">Student Email: {email}</p>
        <p className="student-enrollment-year">Student Enrolled Year: {enrollmentYear}</p>
        <button onClick={() => deleteStudent(studentId)}>Delete</button>
      </div>
    ) : (
      <div className="no-data"><p>No Data</p></div>
    )}
  </div>
</div>




    
  )
}

export default GetById

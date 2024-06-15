import React  from 'react'
import { useState } from 'react';
import GetAll from '../StaffComponents/GetAll';
import GetById from '../StaffComponents/GetById';
import CreateForm from '../StaffComponents/CreateForm';
import '../CSS/StudentCSS.css'

const Staff = () => {
  const [getAll, setGetAll] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [getAllById, setGetAllById] = useState(false);

  const handleDisplayGetAll = () => {
    setGetAll(true);

    setCreateForm(false);
    setGetAllById(false);
  };

  const handleDisplayCreateForm = () => {
    setCreateForm(true);

    setGetAll(false);
    setGetAllById(false);
  };

  const handleDisplayGetAllById = () => {
    setGetAllById(true);

    setGetAll(false);
    setCreateForm(false);
  };
  return (
    <div className="container">
      <div className="left">
        <button onClick={handleDisplayGetAll}>Get ALL the Staff</button>
        <button onClick={handleDisplayGetAllById}>Get One Staff By Id</button>
        <button onClick={handleDisplayCreateForm}>Create a Staff</button>
      </div>
      <div className="right">
        {getAll ? <GetAll /> : ""}
        {createForm ? <CreateForm /> : ""}
        {getAllById ? <GetById /> : ""}
      </div>
    </div>
  )
}

export default Staff

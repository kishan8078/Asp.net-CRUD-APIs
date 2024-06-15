import React, { useState } from "react";
import GetAll from "../StudentComponents/GetAll";
import CreateForm from "../StudentComponents/CreateForm";
import GetById from "../StudentComponents/GetById";
import "../CSS/StudentCSS.css";

const Student = () => {
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
        <button onClick={handleDisplayGetAll}>Get ALL the Students</button>
        <button onClick={handleDisplayGetAllById}>Get One Student By Id</button>
        <button onClick={handleDisplayCreateForm}>Create a Student</button>
      </div>
      <div className="right">
        {getAll && <GetAll />}
        {createForm && <CreateForm />}
        {getAllById && <GetById />}
      </div>
    </div>

  );
};

export default Student;
